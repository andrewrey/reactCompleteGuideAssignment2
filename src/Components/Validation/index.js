import React from "react";

const Validation = ({ input }) => {
  let output = null;
  if (input.length < 5 && input.length > 0) {
    output = <p>Too short, minimum 5 letter word</p>;
  }
  return <div className="validation">{output}</div>;
};

export default Validation;
