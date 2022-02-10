import React, { useState, useEffect } from "react";
import { Chart } from "../../components";
import { salesApi } from "../../api";
import { getMonthEnd, getMonthStart } from "../../utils/time";

function SalesOrderChart() {
  return (
    <Chart
      title="销售订单"
      type="lineChart"
      fetchData={async ({ unit, startTime, endTime }) => {
        return await salesApi.getSalesOrderChartData({
          unit,
          startTime,
          endTime,
        });
      }}
    />
  );
}

export default SalesOrderChart;
