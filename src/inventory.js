import * as React from "react";
import { render } from "react-dom";
import Inventory from "./pages/Inventory";
import "./styles/index.css";

if (process.env.NODE_ENV === "production") {
  odoo.define("dashboard.inventory", function (require) {
    return (el, odoo) => {
      render(<Inventory />, el);
    };
  });
} else {
  render(<Inventory />, document.getElementById("root"));
}
