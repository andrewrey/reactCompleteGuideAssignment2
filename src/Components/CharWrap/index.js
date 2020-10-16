import React from "react";
import CharComponent from "../CharComponent";

const CharWrap = ({ input, splitWord }) => {
  let output = null;
  if (input.length > 4) {
    output = splitWord.map((letter) => <CharComponent letter={letter} />);
  }
  return <section className="charWrap">{output}</section>;
};

export default CharWrap;
