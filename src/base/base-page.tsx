import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { bases } from "../shared/data";
import { Option } from "../shared/types";
import BaseSchedule from "./base-schedule";
import TotalOccurrencesPer from "../dasboard/total-occurrences-per";
import { weatherConditions, weekDays, dayPeriods } from "../shared/data";

export default function BasePage() {
  const { baseId } = useParams();
  const base = bases.find((b: Option) => `${b.id}` === baseId);
  if (!base) return null;
  return (
    <div style={{ padding: 30 }}>
      <h2>
        <span style={{ fontWeight: "lighter" }}>Base </span>
        {base.name}
      </h2>
      <Row>
        <Col md={4} style={{ marginBottom: 30 }}>
          <TotalOccurrencesPer
            title="Dia da semana"
            baseId={baseId}
            options={weekDays}
            genKey={(id: number) => `${baseId}_0_${id}_0`}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 30 }}>
          <TotalOccurrencesPer
            title="Período do dia"
            baseId={baseId}
            options={dayPeriods}
            genKey={(id: number) => `${baseId}_0_0_${id}`}
          />
        </Col>
        <Col md={4} style={{ marginBottom: 30 }}>
          <TotalOccurrencesPer
            title="Condição climática"
            baseId={baseId}
            options={weatherConditions}
            genKey={(id: number) => `${baseId}_${id}_0_0`}
          />
        </Col>
      </Row>
      {!!baseId && (
        <Row>
          <Col>
            <BaseSchedule baseId={baseId} />
          </Col>
        </Row>
      )}
    </div>
  );
}
