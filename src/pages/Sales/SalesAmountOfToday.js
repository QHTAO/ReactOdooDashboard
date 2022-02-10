import React, { useEffect, useState } from "react";
import { salesApi } from "@/api";
import { Epitome } from "@/components";
import { format } from "@/utils";
function SalesAmountOfToday() {
  const [data, setData] = useState(0);
  useEffect(async () => {
    const result = await salesApi.getSalesAmountDataOfToday();
    setData(result);
  }, []);

  return (
    <Epitome data={{ title: "本日销售金额", value: format.money(data) }} />
  );
}

export default SalesAmountOfToday;
