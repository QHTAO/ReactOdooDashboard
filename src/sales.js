import * as React from "react";
import { render } from "react-dom";
import Sales from "./pages/Sales";
import "./styles/index.css";
console.log(process.env.NODE_ENV);
render(<Sales />, document.getElementById("root"));
