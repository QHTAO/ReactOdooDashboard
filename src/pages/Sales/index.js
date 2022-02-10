import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SalesAmountOfToday from "./SalesAmountOfToday";
import SalesOrderChart from "./SalesOrderChart";
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
      <Row>
        <Col md={7}>
          <SalesOrderChart />
        </Col>
 
      </Row>
    </Container>
  );
}

export default Sales;
