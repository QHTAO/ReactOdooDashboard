import * as React from "react";
import ReactDOM from "react-dom";
import Purchase from "./pages/Purchase";
import "./styles/index.scss";

if (process.env.NODE_ENV === "production") {
  odoo.define("dashboard.purchase", function (require) {
    return (el, odoo) => {
      ReactDOM. render(<Purchase />, el);
    };
  });
} else {
  ReactDOM.  render(<Purchase />, document.getElementById("root"));
}
