import * as React from "react";
import ReactDOM from "react-dom";
import Sales from "./pages/Sales";
import "./styles/index.scss";
if (process.env.NODE_ENV === "production") {
  odoo.define("dashboard.sales", function (require) {
    return (el, odoo) => {
      ReactDOM.render(<Sales />, el);
    };
  });
} else {
  ReactDOM.render(<Sales />, document.getElementById("root"));
}
