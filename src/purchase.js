import * as React from "react";
import { render } from "react-dom";
import Purchase from "./pages/Purchase";
import "./styles/index.scss";

if (process.env.NODE_ENV === "production") {
  odoo.define("dashboard.purchase", function (require) {
    return (el, odoo) => {
      render(<Purchase />, el);
    };
  });
} else {
  render(<Purchase />, document.getElementById("root"));
}
