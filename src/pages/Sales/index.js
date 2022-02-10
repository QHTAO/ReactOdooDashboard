import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SalesAmountOfToday from "./SalesAmountOfToday";

import SalesChart from "./SalesChart";

function Sales() {
  return (
    <Container fluid className="r-dashbord">
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
      <SalesChart />
    </Container>
  );
}

export default Sales;
