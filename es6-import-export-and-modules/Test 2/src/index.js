import React from "react";
import ReactDOM from "react-dom";
import * as calc from "./calculator";

//Import the add, multiply, subtract and divide functions from the calculator.js file.

ReactDOM.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
