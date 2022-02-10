import React, { useEffect } from "react";
import { salesApi } from "@/api";
import { Row, Col, Container } from "react-bootstrap";
import SalesAmountOfToday from "./SalesAmountOfToday";
function Sales() {
  useEffect(async () => {
    const result = await salesApi.getSalesOrderChartDataOfMonth("amount");
    console.log(result);
  }, []);
  return (
    <Container fluid className="r-dashbord">
      <Row>
        <Col>
          <SalesAmountOfToday />
        </Col>
      </Row>
    </Container>
  );
}

export default Sales;
