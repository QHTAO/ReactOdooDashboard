import React from "react";
import PropTypes from "prop-types";
import NVD3Chart from "react-nvd3";
const d3 = window.d3;
function PieChart({ data }) {
  return (
    <NVD3Chart
      type="pieChart"
      showControls={false}
      showLegend={true}
      showLabels={false}
      valueFormat={d3.format(",.0f")}
      datum={data}
    />
  );
}
PieChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PieChart;
