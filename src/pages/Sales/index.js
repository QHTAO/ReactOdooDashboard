import React, { useEffect } from "react";
import { salesApi } from "@/api";
import { EpitomeCard } from "@/components";
function Sales() {
  useEffect(async () => {
    const result = await salesApi.getSalesOrderChartDataOfMonth("amount");
    console.log(result);
  }, []);
  return (
    <div>
      Sales
      <EpitomeCard />
    </div>
  );
}

export default Sales;
