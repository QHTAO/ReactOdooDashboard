import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Chart } from "../../components";
import { salesApi } from "../../api";

function SalesChart() {
  return (
    <Row>
      <Col md={7}>
        <Chart
          title="销售订单"
          type="lineChart"
          fetchData={salesApi.getSalesOrderChartData}
        />
      </Col>
      <Col>
        <Chart
          title="销售产品"
          type="lineChart"
          fetchData={salesApi.getSalesOrderChartData}
        />
      </Col>
    </Row>
  );
}

export default SalesChart;
