import React from "react";

const Input = ({ textInput, inputHandler }) => {
  return (
    <div className="inputWrap">
      <input type="text" placeholder="Enter Word..." onChange={inputHandler} value={textInput} />
    </div>
  );
};

export default Input;
