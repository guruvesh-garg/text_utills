import React, { useState } from "react";
import propTypes from "prop-types";

export default function TextBox(props) {
  const ToUpClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const ToLowClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const ToBoldClick = () => {
    let newtext = document.getElementById("mybox");
    newtext.style.fontWeight = "bold";
    settext(newtext.value);
  };
  const ToUnBoldClick = () => {
    let newtext = document.getElementById("mybox");
    newtext.style.fontWeight = "normal";
    settext(newtext.value);
  };
  const OnChange = (event) => {
    settext(event.target.value);
  };
  const [text, settext] = useState("Enter Text Here..");
  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <label htmlFor="mybox" className="form-label">
        {props.tb_title}
      </label>
      <textarea
        className="form-control"
        value={text}
        onChange={OnChange}
        id="mybox"
        rows="8"
      ></textarea>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-danger" onClick={ToUpClick}>
          {props.one}
        </button>
        <button type="button" className="btn btn-warning" onClick={ToBoldClick}>
          {props.two}
        </button>
        <button type="button" className="btn btn-info" onClick={ToUnBoldClick}>
          {props.three}
        </button>
        <button type="button" className="btn btn-success" onClick={ToLowClick}>
          {props.four}
        </button>
      </div>
    </div>
  );
}
TextBox.propTypes = {
  tb_title: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  one: propTypes.string.isRequired,
  two: propTypes.string.isRequired,
  three: propTypes.string.isRequired,
  four: propTypes.string.isRequired,
};
