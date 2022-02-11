import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SalesEpitome from "./SalesEpitome";

import SalesChart from "./SalesChart";

function Sales() {
  return (
    <Container fluid className="r-dashbord">
      <SalesEpitome />
      <SalesChart />
    </Container>
  );
}

export default Sales;
