import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let year = date.getFullYear();

function Footer() {
  return <p>copyright {year} Jonesh</p>;
}
