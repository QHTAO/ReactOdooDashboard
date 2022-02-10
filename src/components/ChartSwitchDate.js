import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";

import { getMonthStart, getMonthEnd } from "../utils/time";
import { getYearEnd, getYearStart } from "../utils/time";
import { getNextMonth, getLastMonth } from "../utils/time";
import { getNextYear, getLastYear } from "../utils/time";

function ChartSwitchDate(props) {
  const { scope, date, onDateChange } = props;

  // 切换时间类型
  const handleSelectMonth = () => {
    onDateChange({
      startTime: getMonthStart(),
      endTime: getMonthEnd(),
    });
  };
  const handleSelectYear = () => {
    onDateChange({
      startTime: getYearStart(),
      endTime: getYearEnd(),
    });
  };

  // 切换月份和年份
  const handleLastMonth = () => {
    let startTime = getLastMonth(date.startTime);
    let endTime = getMonthEnd(startTime);
    onDateChange({
      startTime,
      endTime,
    });
  };
  const handleNextMonth = () => {
    let startTime = getNextMonth(date.startTime);
    let endTime = getMonthEnd(startTime);
    onDateChange({
      startTime,
      endTime,
    });
  };
  const handleLastYear = () => {
    let startTime = getLastYear(date.startTime);
    let endTime = getYearEnd(startTime);
    onDateChange({
      startTime,
      endTime,
    });
  };
  const handleNextYear = () => {
    let startTime = getNextYear(date.startTime);
    let endTime = getYearEnd(startTime);
    onDateChange({
      startTime,
      endTime,
    });
  };

  return (
    <div className="float-right">
      <ButtonGroup>
        <Button
          variant={scope === "month" ? "primary" : "light"}
          onClick={handleSelectMonth}
        >
          月份
        </Button>
        <Button
          variant={scope === "year" ? "primary" : "light"}
          onClick={handleSelectYear}
        >
          年份
        </Button>

        {scope === "month" && (
          <ButtonGroup size="sm">
            <Button variant="light" onClick={handleLastMonth}>
              上一月
            </Button>
            <Button variant="light" onClick={handleNextMonth}>
              下一月
            </Button>
          </ButtonGroup>
        )}
        {scope === "year" && (
          <ButtonGroup size="sm">
            <Button variant="light" onClick={handleLastYear}>
              上一年
            </Button>
            <Button variant="light" onClick={handleNextYear}>
              下一年
            </Button>
          </ButtonGroup>
        )}
      </ButtonGroup>
    </div>
  );
}

ChartSwitchDate.propTypes = {
  date: PropTypes.object,
  onDateChange: PropTypes.func,
};

export default ChartSwitchDate;
