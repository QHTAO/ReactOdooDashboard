import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";

function SwitchUnits(props) {
  const { unit, onUnitsChange } = props;
  return (
    <ButtonGroup>
      <Button
        variant={unit === "amount" ? "primary" : "light"}
        onClick={() => {
          if (onUnitsChange) {
            onUnitsChange("amount");
          }
        }}
      >
        金额
      </Button>
      <Button
        variant={unit === "quantity" ? "primary" : "light"}
        onClick={() => {
          if (onUnitsChange) {
            onUnitsChange("quantity");
          }
        }}
      >
        数量
      </Button>
    </ButtonGroup>
  );
}

SwitchUnits.propTypes = {
  onUnitsChange: PropTypes.func,
};

export default SwitchUnits;
