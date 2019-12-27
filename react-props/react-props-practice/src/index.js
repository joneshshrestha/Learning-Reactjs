import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Contacts from "./contacts";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);

//4. Import the contacts.js file to create card components.
