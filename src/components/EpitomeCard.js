import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function EpitomeCard(props) {
  const { data, data2 } = props;
  return (
    <Card>
      <Card.Body>
        <h5>{data.title}</h5>
        <h1>{data.value}</h1>
        <p>{data2 ? data2.title + "" + data2.value : null}</p>
      </Card.Body>
    </Card>
  );
}

EpitomeCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  data2: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

// const Title = styled.h5``;
// const Body = styled.h1``;
// const Footer = styled.p`
//   margin-bottom: 0rem;
//   min-height: 1.6rem;
// `;

EpitomeCard.defaultProps = {
  data: {
    title: "Undefined",
    value: 0,
  },
};

export default EpitomeCard;
