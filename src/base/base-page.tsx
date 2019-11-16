import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

import TotalOccurrencesPer from "../dasboard/total-occurrences-per";
import { weatherConditions, weekDays, dayPeriods } from "../shared/data";

export default function BasePage() {
  const { baseId } = useParams();
  return (
    <div style={{ padding: 30 }}>
      <Row>
        <Col md={4} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Condição climática</Card.Header>
            <Card.Body>
              <TotalOccurrencesPer
                baseId={baseId}
                options={weatherConditions}
                genKey={(id: number) => `${baseId}_${id}_0_0`}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Dia da semana</Card.Header>
            <Card.Body>
              <TotalOccurrencesPer
                baseId={baseId}
                options={weekDays}
                genKey={(id: number) => `${baseId}_0_${id}_0`}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Período do dia</Card.Header>
            <Card.Body>
              <TotalOccurrencesPer
                baseId={baseId}
                options={dayPeriods}
                genKey={(id: number) => `${baseId}_0_0_${id}`}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
