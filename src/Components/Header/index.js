import React from "react";
import Input from "../Input";

const Header = ({ input, textInputHandler }) => {
  let output = null;
  if (input.length > 0) {
    output = (
      <div className="length-outputWrap">
        <p className="length-label">Value Length:</p>
        <p className="length-output">{input.length}</p>
      </div>
    );
  }

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
        {output}
      </div>
    </header>
  );
};

export default Header;
