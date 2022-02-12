import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";
import { ChartSwitchDate, ChartSwitchUnit, ChartContent, ChartTitle } from ".";
import { getTimeScope, getMonthStart, getMonthEnd } from "../utils/time";
import { getYearAndMonth, getYear } from "../utils/time";

function Chart({ color, type, title, fetchData }) {
  const [unit, setUnit] = useState("amount");
  const [date, setDate] = useState({
    startTime: getMonthStart(),
    endTime: getMonthEnd(),
  });
  const [data, setData] = useState([]);

  //计算属性

  const scope = getTimeScope({ ...date });
  const getChartTitle = () => {
    if (scope === "month") {
      return getYearAndMonth(date.startTime) + title;
    }
    if (scope === "year") {
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
              scope={scope}
              date={date}
              onDateChange={handleDateChange}
            />
          </Col>
        </Row>
      </Card.Header>
      <ChartContent {...{ color, scope, unit, type, data }} />
      <ChartTitle title={getChartTitle()} />
    </Card>
  );
}
Chart.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
};

Chart.defaultProps = {
  type: "discreteBarChart",
};
export default Chart;
