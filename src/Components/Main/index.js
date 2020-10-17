import React from "react";
import Validation from "../Validation";
import CharWrap from "../CharWrap";
import Footer from "../Footer";

const Main = ({ input, splitWord, removechar }) => {
  return (
    <main>
      <Validation input={input} />
      <CharWrap splitWord={splitWord} input={input} removechar={removechar} />
      <Footer />
    </main>
  );
};

export default Main;
