import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Chart } from "../../components";
import { salesApi } from "../../api";

function SalesChart() {
  return (
    <>
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
            // color="#fdc225"
            type="discreteBarChart"
            fetchData={salesApi.getSalesOrderChartData}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Chart
            title="销售订单"
            type="pieChart"
            fetchData={salesApi.getSalesOrderChartData}
          />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default SalesChart;
