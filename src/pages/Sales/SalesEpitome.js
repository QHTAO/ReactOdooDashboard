import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
  getSalesAmountEpitomeDataOfToday,
  getSalesAmountEpitomeDataOfMonth,
} from "../../api/salesApi";
import {
  getUnshippedOrderQuantityData,
  getAccountsReceivableData,
  getReturnOrderQuantityDataOfThisMonth,
} from "../../api/salesApi";
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
      <Epitome
        data={{ title: "本日销售金额", value: money(data.amount) }}
        data2={{ title: "本日销售毛利", value: money(data.profit) }}
      />
    </Col>
  );
}
function SalesAmountEpitomeDataOfMonth() {
  const [data, setData] = useState({
    amount: 0,
    profit: 0,
  });
  useEffect(async () => {
    const result = await getSalesAmountEpitomeDataOfMonth();
    setData(result);
  }, []);
  return (
    <Col>
      <Epitome
        data={{ title: "本月销售金额", value: money(data.amount) }}
        data2={{ title: "本月销售毛利", value: money(data.profit) }}
      />
    </Col>
  );
}
function UnshippedOrderQuantityData() {
  const [data, setData] = useState({
    notShipped: 0,
    notInvoiced: 0,
  });
  useEffect(async () => {
    const result = await getUnshippedOrderQuantityData();
    setData(result);
  }, []);
  return (
    <Col>
      <Epitome
        data={{ title: "当前未发货订单", value: money(data.notShipped) }}
        data2={{ title: "已发货但未开票订单", value: money(data.notInvoiced) }}
      />
    </Col>
  );
}
function AccountsReceivableData() {
  const [data, setData] = useState(0);
  useEffect(async () => {
    const result = await getAccountsReceivableData();
    setData(result);
  }, []);
  return (
    <Col>
      <Epitome data={{ title: "当前应收账款", value: money(data) }} />
    </Col>
  );
}

function ReturnOrderQuantityDataOfThisMonth() {
  const [data, setData] = useState(0);
  useEffect(async () => {
    const result = await getReturnOrderQuantityDataOfThisMonth();
    setData(result);
  }, []);
  return (
    <Col>
      <Epitome data={{ title: "本月退货单数", value: money(data) }} />
    </Col>
  );
}

function SalesEpitome() {
  return (
    <Row>
      <SalesAmountEpitomeDataOfToday />
      <SalesAmountEpitomeDataOfMonth />
      <UnshippedOrderQuantityData />
      <AccountsReceivableData />
      <ReturnOrderQuantityDataOfThisMonth />
    </Row>
  );
}
export default SalesEpitome;
