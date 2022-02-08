import React, { useEffect } from "react";
import { salesApi } from "@/api";
function Sales() {
  useEffect(async () => {
    const result = await salesApi.getSalesOrderChartDataOfMonth("amount");
    console.log(result);
  }, []);
  return <div>Sales</div>;
}

export default Sales;
