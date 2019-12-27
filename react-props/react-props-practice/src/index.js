import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Contacts from "./contacts";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App Contacts />
  </div>,
  document.getElementById("root")
);

//4. Import the contacts.js file to create card components.
