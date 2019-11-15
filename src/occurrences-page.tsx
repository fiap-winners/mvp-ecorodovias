import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import OccurrenceForm from "./occurrence-form";
import OccurrenceLoad from "./occurrence-load";

export default function OccurrencesPage() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col md={8}>
          <OccurrenceForm />
        </Col>
        <Col md={4}>
          <OccurrenceLoad />
        </Col>
      </Row>
    </Container>
  );
}
