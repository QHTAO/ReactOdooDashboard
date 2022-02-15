import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import {
  ChartControls,
  DiscreteBarChart,
  ChartTitle,
  LineChart,
  PieChart,
} from ".";
import { getTimeScope, getMonthStart, getMonthEnd } from "../utils/time";
import { getYearAndMonth, getYear } from "../utils/time";

function Chart({ color, type, title, fetchData }) {
  const [unit, setUnit] = useState("amount");
  const [date, setDate] = useState({
    startTime: getMonthStart(),
    endTime: getMonthEnd(),
  });
  const [data, setData] = useState([]);
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

  const renderNvd3Chart = ({ date, color, type, data }) => {
    switch (type) {
      case "lineChart":
        return <LineChart date={date} color={color} data={data} />;
      case "discreteBarChart":
        return (
          <DiscreteBarChart date={date} color={color}  data={data} />
        );
      case "pieChart":
        return <PieChart date={date} color={color} data={data} />;
      default:
        return null;
    }
  };

  return (
    <Card className="r-chart">
      <ChartControls
        unit={unit}
        onUnitChange={handleUnitChange}
        date={date}
        onDateChange={handleDateChange}
      />

      <Card.Body> {renderNvd3Chart({ date, color, type, data })}</Card.Body>

      {/* <ChartContent date={date} color={color} type={type} data={data} /> */}
      <ChartTitle date={date} title={title} />
    </Card>
  );
}
Chart.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default Chart;
