import React, { useState, useEffect } from "react";
import { Chart } from "../../components";
import { salesApi } from "../../api";
import { getMonthEnd, getMonthStart } from "../../utils/time";

function SalesOrderChart() {
  const [unit, setUnit] = useState("amount");
  const [date, setDate] = useState({
    startTime: getMonthStart(),
    endTime: getMonthEnd(),
  });
  const [data, setData] = useState([]);
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <Chart
      title="销售订单"
      date={date}
      onDateChange={handleDateChange}
      unit={unit}
      onUnitChange={handleUnitChange}
    />
  );
}

export default SalesOrderChart;
// function SalesOrderChart() {
//   const title = "销售订单";
//   const [unit, setUnit] = useState("amount");
//   const [date, setDate] = useState({
//     startTime: time.getMonthStart(),
//     endTime: time.getYearStart(),
//   });
//   const [data, setData] = useState([]);

//   const handleUnitsChange = (newUnit) => {
//     setUnit(newUnit);
//   };
//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   useEffect(async () => {
//     const result = await salesApi.getSalesOrderChartData({ unit, ...date });
//     setData(result);
//   }, [unit, date]);

//   const fetchData = () => {};
//   return (
//     <div>
//       <SwitchUnits unit={unit} onUnitsChange={handleUnitsChange} />

//       <SwitchDate
//         date={date}
//         scope={getTimeScope({ ...date })}
//         onDateChange={handleDateChange}
//       />
//       {title}

//       {getYearAndMonth(date.startTime)}
//     </div>
//   );
// }
