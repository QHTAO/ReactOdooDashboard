import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ChartSwitchDate, ChartSwitchUnit, ChartContent, ChartTitle } from ".";
import { getTimeScope, getMonthStart, getMonthEnd } from "../utils/time";
import { getYearAndMonth, getYear } from "../utils/time";

function Chart({ type, title, fetchData }) {
  const [unit, setUnit] = useState("amount");
  const [date, setDate] = useState({
    startTime: getMonthStart(),
    endTime: getMonthEnd(),
  });
  const [data, setData] = useState([]);

  //计算属性
  const getChartScope = () => {
    return getTimeScope({ ...date });
  };
  const getChartTitle = () => {
    if (getChartScope() === "month") {
      return getYearAndMonth(date.startTime) + title;
    }
    if (getChartScope() === "year") {
      return getYear(date.startTime) + title;
    }
  };

  //事件处理
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  useEffect(async () => {
    const result = await fetchData({ ...date, unit });
    setData(result);
  }, [unit, date]);

  return (
    <Card className="r-chart">
      <Card.Header>
        <Row noGutters>
          <Col md={3}>
            <ChartSwitchUnit unit={unit} onUnitChange={handleUnitChange} />
          </Col>
          <Col>
            <ChartSwitchDate
              scope={getChartScope()}
              date={date}
              onDateChange={handleDateChange}
            />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <ChartContent type={type} data={data} />
      </Card.Body>
      <ChartTitle title={getChartTitle()} />
    </Card>
  );
}

export default Chart;
