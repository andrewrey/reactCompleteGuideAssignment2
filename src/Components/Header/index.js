import React from "react";
import Input from "../Input";

const Header = ({ input, textInputHandler }) => {
  return (
    <header>
      <div className="animationArea">
        <ul className="blocks">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="contentWrapper">
        <h1>Assignment 2</h1>
        <Input textInput={input} inputHandler={textInputHandler} />
        <div className="length-outputWrap">
          <p>Value Length:</p>
          <p className="length-output">Test</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
