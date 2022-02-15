import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { getTimeScope, getYearAndMonth, getYear } from "../utils/time";

function ChartTitle({ date, title }) {
  const scope = getTimeScope(date);
  return (
    <Card.Footer>
      <Card.Title>
        {scope === "month" && getYearAndMonth(date.startTime) + title}
        {scope === "year" && getYear(date.startTime) + title}
      </Card.Title>
    </Card.Footer>
  );
}
ChartTitle.propTypes = {
  date: PropTypes.shape({
    startTime: PropTypes.object,
    endTime: PropTypes.object,
  }).isRequired,
  title: PropTypes.string.isRequired,
};
export default ChartTitle;
