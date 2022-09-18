import React from "react";

export default function About() {
  const temp = {
    width: "18rem",
  };
  const temp1 = {
    width: "20px",
  };
  return (
    <>
      <div className="card container my-5" style={temp}>
        <div className="card-body">
          <img className="card-img-top" src="/dev.png" alt="Card cap" />
          <h5 className="card-title ">
            <br></br>Guruvesh Garg
          </h5>
          <p className="card-text"> </p>
          <a
            href="https://in.linkedin.com/in/guruvesh-garg"
            className="card-link"
          >
            <img src="/linkdin.png" alt="Linkdin" style={temp1} />
          </a>
          <a href="https://github.com/guruvesh-garg" className="card-link">
            <img src="/github.png" alt="Github" style={temp1} />
          </a>
          <a
            href="https://www.facebook.com/guruvesh.garg"
            className="card-link"
          >
            <img src="/facebook.png" alt="Facebook" style={temp1} />
          </a>
          <a href="mailto:ggguruveshgarg@gmail.com" className="card-link">
            <img src="/email.png" alt="Email" style={temp1} />
          </a>
        </div>
      </div>
    </>
  );
}
