import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { getSalesAmountEpitomeDataOfToday } from "../../api/salesApi";
import { Epitome } from "../../components";
import { money } from "../../utils/format";

function SalesAmountEpitomeDataOfToday() {
  const [data, setData] = useState({
    amount: 0,
    profit: 0,
  });
  useEffect(async () => {
    const result = await getSalesAmountEpitomeDataOfToday();
    setData(result);
  }, []);
  return (
    <Col>
      <Epitome data={{ title: "本日销售金额", value: money(data.amount) }}  data2={{ title: "本日销售毛利", value: money(data.profit) }}/>
    </Col>
  );
}
function SalesEpitome() {
  return (
    <Row>
      <SalesAmountEpitomeDataOfToday />
    </Row>
  );
}
export default SalesEpitome;
