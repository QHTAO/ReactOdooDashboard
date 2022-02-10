import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";

function SwitchUnit(props) {
  const { unit, onUnitChange } = props;
  return (
    <ButtonGroup>
      <Button
        variant={unit === "amount" ? "primary" : "light"}
        onClick={() => {
          onUnitChange && onUnitChange("amount");
        }}
      >
        金额
      </Button>
      <Button
        variant={unit === "quantity" ? "primary" : "light"}
        onClick={() => {
          onUnitChange && onUnitChange("quantity");
        }}
      >
        数量
      </Button>
    </ButtonGroup>
  );
}

SwitchUnit.propTypes = {
  onUnitsChange: PropTypes.func,
};

export default SwitchUnit;
