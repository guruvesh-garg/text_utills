import Textutills from "./component/Textutills";
import NavBar from "./component/NavBar";
import TextBox from "./component/TextBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./component/About";

function App() {
  return (
    <>
      <Router>
        <NavBar
          title="TextUtills"
          find="Find"
          title3="Contact Us"
          title2="Home"
        />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Textutills />}></Route>
            <Route exact path="/contact-us" element={<About />}></Route>
            <Route
              exact
              path="/home"
              element={
                <TextBox
                  tb_title="Lets Do Some Fun"
                  heading="Enter Your Magic Text"
                  one="Uppercase"
                  two="Bold"
                  three="Unbold"
                  four="Lowercase"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
