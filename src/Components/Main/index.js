import React from "react";
import Validation from "../Validation";
import CharWrap from "../CharWrap";

const Main = ({ input, splitWord }) => {
  return (
    <main>
      <Validation input={input} />
      <CharWrap splitWord={splitWord} input={input} />
    </main>
  );
};

export default Main;
