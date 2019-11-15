import React, { FormEvent, ChangeEvent, useCallback } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

import FormField from "./form-field";
import { bases, weatherConditions, weekDays, dayPeriods } from "./data";

export default function OccurrenceForm() {
  const onFieldChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.name, e.target.value);
  }, []);
  return (
    <Card>
      <Card.Header>Registrar Ocorrência</Card.Header>
      <Card.Body>
        <Form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <Row>
            <Col md="6">
              <FormField
                name="base"
                options={bases}
                onSelect={onFieldChange}
                label="Bases de Atendimento"
              />
            </Col>
            <Col md="6">
              <FormField
                name="weatherCondition"
                options={weatherConditions}
                onSelect={onFieldChange}
                label="Condição Climática"
              />
            </Col>
            <Col md="6">
              <FormField
                name="weekDay"
                options={weekDays}
                onSelect={onFieldChange}
                label="Dia da Semana"
              />
            </Col>
            <Col md="6">
              <FormField
                name="dayPeriod"
                options={dayPeriods}
                onSelect={onFieldChange}
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
