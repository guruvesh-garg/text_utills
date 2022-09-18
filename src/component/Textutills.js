import React from "react";

export default function Textutills() {
  const temp = {
    width: "18rem",
  };
  return (
    <div className="container my-5 card" style={temp}>
      <img className="card-img-top" src="/about_page.png" alt="Card cap" />
      <div className="card-body">
        <p className="card-text">
          TextUtills is just to manipulate the text according to user
          requirements. <br></br>It helps us in day today life.
        </p>
      </div>
    </div>
  );
}
