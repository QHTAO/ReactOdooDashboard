import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";
import { ButtonGroup, Button } from "react-bootstrap";

import { getTimeScope } from "../utils/time";
import { getMonthStart, getMonthEnd } from "../utils/time";
import { getYearEnd, getYearStart } from "../utils/time";
import { getNextMonth, getLastMonth } from "../utils/time";
import { getNextYear, getLastYear } from "../utils/time";

function ChartControls({ unit, date, onDateChange, onUnitChange }) {
  const scope = getTimeScope({ ...date });

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
    <Card.Header>
      <Row>
        <Col md={3}>
          <ButtonGroup>
            <Button
              variant={unit === "amount" ? "primary" : "light"}
              onClick={() => {
                onUnitChange("amount");
              }}
            >
              金额
            </Button>
            <Button
              variant={unit === "quantity" ? "primary" : "light"}
              onClick={() => {
                onUnitChange("quantity");
              }}
            >
              数量
            </Button>
          </ButtonGroup>
        </Col>
        <Col>
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
        </Col>
      </Row>
    </Card.Header>
  );
}
ChartControls.propTypes = {
  unit: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onUnitChange: PropTypes.func.isRequired,
};
export default ChartControls;
