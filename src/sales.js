import * as React from "react";
import { render } from "react-dom";
import Sales from "./pages/Sales";
import "./styles/index.css";
if (process.env.NODE_ENV === "production") {
  odoo.define("dashboard.sales", function (require) {
    return (el, odoo) => {
      render(<Sales />, el);
    };
  });
} else {
  render(<Sales />, document.getElementById("root"));
}
