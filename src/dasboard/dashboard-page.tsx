import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import { bases, weatherConditions, weekDays, dayPeriods } from "../shared/data";
import TotalOccurrencesPer from "./total-occurrences-per";

export default function DashboardPage() {
  return (
    <div style={{ padding: 30 }}>
      <Row>
        <Col md={6} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Ocorrências por base de atendimento</Card.Header>
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
            <Card.Header>Ocorrências por condição climática</Card.Header>
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
            <Card.Header>Ocorrências per dia da semana</Card.Header>
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
            <Card.Header>Ocorrências por período do dia</Card.Header>
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
