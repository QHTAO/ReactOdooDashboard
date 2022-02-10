import React, { useState, useEffect } from "react";
import { SwitchUnits, SwitchDate } from "../../components";
import { salesApi } from "../../api";
import { time } from "../../utils";
import { getTimeScope } from "../../utils/time";

const moment = window.moment;
function SalesOrderChart() {
  const title = "销售订单";
  const [unit, setUnit] = useState("amount");
  const [date, setDate] = useState({
    startTime: time.getThisMonthStart(),
    endTime: time.getThisYearStart(),
  });
  const [data, setData] = useState([]);

  const handleUnitsChange = (newUnit) => {
    setUnit(newUnit);
  };
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(async () => {
    const result = await salesApi.getSalesOrderChartData({ unit, ...date });
    setData(result);
  }, [unit, date]);

  const fetchData = () => {};
  return (
    <div>
      <SwitchUnits unit={unit} onUnitsChange={handleUnitsChange} />

      <SwitchDate
        date={date}
        scope={getTimeScope({ ...date })}
        onDateChange={handleDateChange}
      />
      {title}
    </div>
  );
}

export default SalesOrderChart;
