import React from "react";
import PropTypes from "prop-types";
import NVD3Chart from "react-nvd3";
import { getTimeScope } from "../utils/time";

const d3 = window.d3;
function DiscreteBarChart({ date, color, data }) {
  const scope = getTimeScope(date);
  const xAxisTickFormat = (d) => {
    if (scope === "month" && data[0] && data[0].x instanceof Date) {
      return d3.time.format("%d日")(d);
    }
    if (scope === "year" && data[0] && data[0].x instanceof Date) {
      return d3.time.format("%m月")(d);
    }
    return d;
  };
  const yAxisTickFormat = (d) => {
    return d3.format(",.0f")(d);
  };
  const max = d3.max(data, function (d) {
    return d["y"];
  });
  const yDomain = [0, max + max / 10];
  
  return (
    <NVD3Chart
      type="discreteBarChart"
      showControls={false}
      showLegend={false}
      staggerLabels={false}
      xAxis={{
        tickFormat: xAxisTickFormat,
        // rotateLabels: -15,
      }}
      yAxis={{
        tickFormat: yAxisTickFormat,
      }}
      yDomain={yDomain}
      color={color ? [color] : ["#1f77b4"]}
      showValues={false}
      datum={[
        {
          values: data,
        },
      ]}
    />
  );
}
DiscreteBarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DiscreteBarChart;
