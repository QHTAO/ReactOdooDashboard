import React from "react";
import PropTypes from "prop-types";
import NVD3Chart from "react-nvd3";
import { getTimeScope } from "../utils/time";

const d3 = window.d3;
function LineChart({ date, color, data }) {
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
      type="lineChart"
      showControls={false}
      showLegend={false}
      useInteractiveGuideline={true}
      interpolate="cardinal"
      xScale={data[0] && data[0].x instanceof Date ? d3.time.scale() : null}
      xAxis={{
        tickFormat: xAxisTickFormat,
      }}
      yAxis={{
        tickFormat: yAxisTickFormat,
      }}
      yDomain={yDomain}
      datum={[
        {
          color: color,
          values: data,
        },
      ]}
    />
  );
}
LineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LineChart;
