import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function ChartTitle({ title }) {
  return (
    <Card.Footer>
      <Card.Title> {title} </Card.Title>
    </Card.Footer>
  );
}
ChartTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ChartTitle;
