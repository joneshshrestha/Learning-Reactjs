import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>My Favorite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Noodles</li>
//       <li>Cheese</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

let name = "Jonesh";
ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));
