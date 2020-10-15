import React from "react";
import Validation from "../Validation";
import CharWrap from "../CharWrap";

const Main = ({ input }) => {
  return (
    <main>
      <Validation input={input} />
      <CharWrap />
    </main>
  );
};

export default Main;
