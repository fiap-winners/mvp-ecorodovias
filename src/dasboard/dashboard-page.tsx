import React from "react";
import { Row, Col } from "react-bootstrap";

import TotalOccurrencesPer from "./total-occurrences-per";
import { bases, weatherConditions, weekDays, dayPeriods } from "../shared/data";

export default function DashboardPage() {
  return (
    <div style={{ padding: 30 }}>
      <Row>
        <Col md={6} style={{ marginBottom: 30 }}>
          <TotalOccurrencesPer
            title="Base de atendimento"
            options={bases}
            genKey={(id: number) => `${id}_0_0_0`}
          />
        </Col>
        <Col md={6} style={{ marginBottom: 30 }}>
          <TotalOccurrencesPer
            title="Condição climática"
            options={weatherConditions}
            genKey={(id: number) => `0_${id}_0_0`}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ marginBottom: 30 }}>
          <TotalOccurrencesPer
            title="Dia da semana"
            options={weekDays}
            genKey={(id: number) => `0_0_${id}_0`}
          />
        </Col>
        <Col md={6} style={{ marginBottom: 30 }}>
          <TotalOccurrencesPer
            title="Período do dia"
            options={dayPeriods}
            genKey={(id: number) => `0_0_0_${id}`}
          />
        </Col>
      </Row>
    </div>
  );
}
