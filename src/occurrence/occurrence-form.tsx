import React, { FormEvent, ChangeEvent, useState, useCallback } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

import { byId } from "../shared/utils";
import { datalakeDoc } from "../shared/firebase";
import FormField from "../shared/form-field";
import { generateAnalyticsIdsFromOccurrence } from "./datalake-load";
import { bases, weatherConditions, weekDays, dayPeriods } from "../shared/data";

export default function OccurrenceForm() {
  const [baseId, setBaseId] = useState(0);
  const [weatherConditionId, setWeatherConditionId] = useState(0);
  const [weekDayId, setWeekDayId] = useState(0);
  const [dayPeriodId, setDayPeriodId] = useState(0);

  const onBaseSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setBaseId(Number.parseInt(e.target.value, 10));
  }, []);

  const onWeatherConditionSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setWeatherConditionId(Number.parseInt(e.target.value, 10));
    },
    []
  );

  const onWeekDaySelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setWeekDayId(Number.parseInt(e.target.value, 10));
  }, []);

  const onDayPeriodSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setDayPeriodId(Number.parseInt(e.target.value, 10));
  }, []);

  const onFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const base = bases.find(byId(baseId));
      const weatherCondition = weatherConditions.find(byId(weatherConditionId));
      const weekDay = weekDays.find(byId(weekDayId));
      const dayPeriod = dayPeriods.find(byId(dayPeriodId));

      if (base && weatherCondition && weekDay && dayPeriod) {
        const occurrence = { base, weatherCondition, weekDay, dayPeriod };
        const ids = generateAnalyticsIdsFromOccurrence(occurrence);
        ids.forEach((id: string) => {
          const docRef = datalakeDoc(id);
          docRef.get().then(doc => {
            const docData = doc.data();
            if (!!docData) {
              docRef.update({
                c: docData.c + 1
              });
            } else {
              docRef.set({
                c: 1
              });
            }
          });
        });
      }

      setBaseId(0);
      setWeatherConditionId(0);
      setWeekDayId(0);
      setDayPeriodId(0);
    },
    [baseId, weatherConditionId, weekDayId, dayPeriodId]
  );

  return (
    <Card>
      <Card.Header>Registrar Ocorrência</Card.Header>
      <Card.Body>
        <Form onSubmit={onFormSubmit}>
          <Row>
            <Col md="6">
              <FormField
                name="base"
                value={baseId}
                options={bases}
                onSelect={onBaseSelect}
                label="Bases de Atendimento"
              />
            </Col>
            <Col md="6">
              <FormField
                name="weatherCondition"
                value={weatherConditionId}
                options={weatherConditions}
                onSelect={onWeatherConditionSelect}
                label="Condição Climática"
              />
            </Col>
            <Col md="6">
              <FormField
                name="weekDay"
                value={weekDayId}
                options={weekDays}
                onSelect={onWeekDaySelect}
                label="Dia da Semana"
              />
            </Col>
            <Col md="6">
              <FormField
                name="dayPeriod"
                value={dayPeriodId}
                options={dayPeriods}
                onSelect={onDayPeriodSelect}
                label="Período do Dia"
              />
            </Col>
          </Row>
          <Button type="submit">Registrar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
