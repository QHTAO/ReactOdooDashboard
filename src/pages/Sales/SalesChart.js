import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Chart } from "../../components";
import {
  getSalesOrderChartData,
  getSalesProductsChartData,
  getSalesClassificationChartData,
  getSalesTeamChartData,
} from "../../api/salesApi";

function SalesChart() {
  return (
    <>
      <Row>
        <Col>
          <Chart
            title="销售订单"
            type="lineChart"
            fetchData={getSalesOrderChartData}
          />
        </Col>
        <Col>
          <Chart
            title="销售产品"
            type="discreteBarChart"
            fetchData={getSalesProductsChartData}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Chart
            title="销售分类"
            type="pieChart"
            fetchData={getSalesClassificationChartData}
          />
        </Col>
        <Col>
          <Chart
            title="销售团队"
            type="discreteBarChart"
            fetchData={getSalesTeamChartData}
          />
        </Col>
      </Row>
    </>
  );
}

export default SalesChart;
