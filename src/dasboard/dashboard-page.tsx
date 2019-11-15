import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function DashboardPage() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col xs={6} md={3} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Title goes here</Card.Header>
            <Card.Body>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Title goes here</Card.Header>
            <Card.Body>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Title goes here</Card.Header>
            <Card.Body>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Title goes here</Card.Header>
            <Card.Body>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Title goes here</Card.Header>
            <Card.Body>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} style={{ marginBottom: 30 }}>
          <Card>
            <Card.Header>Title goes here</Card.Header>
            <Card.Body>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
