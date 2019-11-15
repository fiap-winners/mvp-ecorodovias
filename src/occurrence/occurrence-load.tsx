import React from "react";
import { Card, Button } from "react-bootstrap";

export default function OccurrenceLoad() {
  return (
    <Card>
      <Card.Header>Carregar Ocorrências</Card.Header>
      <Card.Body>
        <Button block variant="outline-success" style={{ marginBottom: 15 }}>
          Carregar 10 Ocorrências
        </Button>

        <Button block variant="outline-warning" style={{ marginBottom: 15 }}>
          Carregar 100 Ocorrências
        </Button>

        <Button block variant="outline-danger">
          Carregar 1000 Ocorrências
        </Button>
      </Card.Body>
    </Card>
  );
}
