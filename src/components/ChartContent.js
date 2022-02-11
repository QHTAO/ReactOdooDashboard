import React from "react";
import NVD3Chart from "react-nvd3";
import { Card } from "react-bootstrap";
const d3 = window.d3;

function ChartContent({ scope, type, data, color }) {
  const x0 = data.length ? data[0].x : null;
  const getXAxisTickFormat = (d) => {
    if (scope === "month" && x0 instanceof Date) {
      return d3.time.format("%d日")(d);
    }
    if (scope === "year" && x0 instanceof Date) {
      return d3.time.format("%m月")(d);
    }
    return d;
  };

  const getYDomain = () => {
    if (data.length) {
    }
    return [0, 100000];
  };

  switch (type) {
    case "lineChart":
      return (
        <Card.Body>
          <NVD3Chart
            type="lineChart"
            showControls={false}
            showLegend={false}
            useInteractiveGuideline={true}
            xScale={d3.time.scale()}
            xAxis={{
              tickFormat: getXAxisTickFormat,
              rotateLabels: -15,
            }}
            yDomain={getYDomain()}
            datum={[
              {
                color: color,
                values: data,
              },
            ]}
          />
        </Card.Body>
      );
    case "discreteBarChart":
      return (
        <Card.Body>
          <NVD3Chart
            type="discreteBarChart"
            showControls={false}
            showLegend={false}
            staggerLabels={false}
            xAxis={{
              tickFormat: getXAxisTickFormat,
              rotateLabels: -15,
            }}
            yDomain={getYDomain()}
            color={color ? [color] : ["#1f77b4"]}
            showValues={false}
            valueFormat={d3.format(",.0f")}
            datum={[
              {
                values: data,
              },
            ]}
          />
        </Card.Body>
      );
    case "pieChart":
      return (
        <Card.Body>
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
        </Card.Body>
      );
    default:
      return null;
  }
}

export default ChartContent;
