import React from "react";
import NVD3Chart from "react-nvd3";

const d3 = window.d3;

function ChartContent({ scope, type, data, color }) {
  console.log(type);
  console.log(data);
  const x0 = data.length ? data[0].x : null;

  const getxAxisTickFormat = (d) => {
    if (scope === "month") {
      return d3.time.format("%d日")(d);
    }
    if (scope === "year") {
      return d3.time.format("%m月")(d);
    }
    return d;
  };

  switch (type) {
    case "lineChart":
      return (
        <NVD3Chart
          type="lineChart"
          showControls={false}
          showLegend={false}
          useInteractiveGuideline={true}
          xScale={d3.time.scale()}
          xAxis={{
            tickFormat: (d) => {
              return d3.time.format("%m月")(new Date(d));
            },
            rotateLabels: -15,
          }}
          yDomain={[0, 100000]}
          datum={[
            {
              color: color,
              values: data,
            },
          ]}
        />
      );
    case "discreteBarChart":
      return (
        <NVD3Chart
          type="discreteBarChart"
          showControls={false}
          showLegend={false}
          staggerLabels={false}
          xAxis={{
            tickFormat: getxAxisTickFormat,
            rotateLabels: -15,
            showMaxMin: true,
          }}
          yDomain={[0, 100000]}
          color={color ? [color] : ["#1f77b4"]}
          showValues={false}
          valueFormat={d3.format(",.0f")}
          datum={[
            {
              values: data,
            },
          ]}
        />
      );
    case "pieChart":
      return (
        <NVD3Chart
          type="pieChart"
          showControls={false}
          showLegend={true}
          showLabels={false}
          valueFormat={d3.format(",.0f")}
          datum={data.map((d) => {
            if (scope === "month") {
              return { ...d, x: d3.time.format("%d日")(d.x) };
            }
            if (scope === "year") {
              return { ...d, x: d3.time.format("%m月")(d.x) };
            }
          })}
        />
      );
    default:
      return null;
  }
}

export default ChartContent;
