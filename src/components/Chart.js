import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { SwitchDate, SwitchUnit } from ".";
import { getTimeScope, getYear, getYearAndMonth } from "../utils/time";

function Chart(props) {
  const { title, unit, onUnitChange } = props;
  const { date, onDateChange } = props;
  const scope = getTimeScope({ ...date });
  let cardTitle = "";
  if (scope === "month") {
    cardTitle = getYearAndMonth(date.startTime) + title;
  }
  if (scope === "year") {
    cardTitle = getYear(date.startTime) + title;
  }

  return (
    <Card className="r-chart">
      <Card.Header>
        <Row noGutters>
          <Col md={3}>
            <SwitchUnit unit={unit} onUnitChange={onUnitChange} />
          </Col>
          <Col>
            <SwitchDate scope={scope} date={date} onDateChange={onDateChange} />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>body</Card.Body>
      <Card.Footer>
        <Card.Title>{cardTitle}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default Chart;
