import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import OccurrenceForm from "./occurrence-form";
import OccurrenceLoad from "./occurrence-load";
import DatalakeLoad from "./datalake-load";

export default function OccurrencePage() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col md={8}>
          <OccurrenceForm />
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Carregar Dados</Card.Header>
            <Card.Body>
              <OccurrenceLoad />
              <DatalakeLoad />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
