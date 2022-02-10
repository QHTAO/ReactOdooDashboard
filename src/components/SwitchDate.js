import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";

import { getTimeScope } from "../utils/time";
import { getThisMonthStart, getThisMonthEnd } from "../utils/time";
import { getThisYearEnd, getThisYearStart } from "../utils/time";

function SwitchDate(props) {
  const { date, onDateChange } = props;
  const scope = getTimeScope({ ...date });

  // 切换时间类型
  const handleSelectMonth = () => {
    onDateChange({
      startTime: getThisMonthStart(),
      endTime: getThisMonthEnd(),
    });
  };
  const handleSelectYear = () => {
    onDateChange({
      startTime: getThisYearStart(),
      endTime: getThisYearEnd(),
    });
  };
  // 切换月份和年份

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
            <Button variant="light">上一月</Button>
            <Button variant="light">下一月</Button>
          </ButtonGroup>
        )}
        {scope === "year" && (
          <ButtonGroup size="sm">
            <Button variant="light">上一年</Button>
            <Button variant="light">下一年</Button>
          </ButtonGroup>
        )}
      </ButtonGroup>
    </div>
  );
}

SwitchDate.propTypes = {
  date: PropTypes.object,
  onDateChange: PropTypes.func,
};

export default SwitchDate;
