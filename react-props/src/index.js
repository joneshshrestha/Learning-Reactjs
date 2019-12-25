import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.img}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack"
      img="https://akns-images.eonline.com/eol_images/Entire_Site/2019813/rs_634x1024-190913071043-634-Jack-Nicholson-JR2-91319.jpg?fit=inside|900:auto&output-quality=90"
      tel="+122 323 444"
      email="jack@jack.com"
    />
  </div>,
  document.getElementById("root")
);
