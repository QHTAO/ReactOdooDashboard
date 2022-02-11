import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Epitome({ data, data2 }) {
  return (
    <Card>
      <Card.Body>
        <h5>{data.title}</h5>
        <h1>{data.value}</h1>
        <p>{data2 ? data2.title + "：" + data2.value : null}</p>
      </Card.Body>
    </Card>
  );
}

Epitome.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  data2: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

Epitome.defaultProps = {
  data: {
    title: "Undefined",
    value: 0,
  },
};

export default Epitome;
