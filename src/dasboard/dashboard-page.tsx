import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import TotalOccurrencesPer from "./total-occurrences-per";
import { bases, weatherConditions, weekDays, dayPeriods } from "../shared/data";

export default function DashboardPage() {
  return (
    <div style={{ padding: 30 }}>
      <Row>
        <Col md={6} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Base de atendimento</Card.Header>
            <Card.Body>
              <TotalOccurrencesPer
                options={bases}
                genKey={(id: number) => `${id}_0_0_0`}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Condição climática</Card.Header>
            <Card.Body>
              <TotalOccurrencesPer
                options={weatherConditions}
                genKey={(id: number) => `0_${id}_0_0`}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Dia da semana</Card.Header>
            <Card.Body>
              <TotalOccurrencesPer
                options={weekDays}
                genKey={(id: number) => `0_0_${id}_0`}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Período do dia</Card.Header>
            <Card.Body>
              <TotalOccurrencesPer
                options={dayPeriods}
                genKey={(id: number) => `0_0_0_${id}`}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
