import React from "react";
import { Card } from "react-bootstrap";

function ChartTitle({ title }) {
  return (
    <Card.Footer>
      <Card.Title> {title} </Card.Title>
    </Card.Footer>
  );
}

export default ChartTitle;
