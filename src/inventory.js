import * as React from "react";
import ReactDOM from "react-dom";
import Inventory from "./pages/Inventory";
import "./styles/index.scss";

if (process.env.NODE_ENV === "production") {
  odoo.define("dashboard.inventory", function (require) {
    return (el, odoo) => {
      ReactDOM . render(<Inventory />, el);
    };
  });
} else {
  ReactDOM . render(<Inventory />, document.getElementById("root"));
}
