import React from "react";
import { Row, Col } from "react-bootstrap";
import SalesAmountOfToday from "./SalesAmountOfToday";

function SalesEpitome() {
  return (
    <Row>
      <Col>
        <SalesAmountOfToday />
      </Col>
      <Col>
        <SalesAmountOfToday />
      </Col>
      <Col>
        <SalesAmountOfToday />
      </Col>
      <Col>
        <SalesAmountOfToday />
      </Col>
      <Col>
        <SalesAmountOfToday />
      </Col>
    </Row>
  );
}

export default SalesEpitome;
