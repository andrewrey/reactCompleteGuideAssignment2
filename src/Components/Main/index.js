import React from "react";
import Validation from "../Validation";
import CharWrap from "../CharWrap";
import Footer from "../Footer";

const Main = ({ input, splitWord }) => {
  return (
    <main>
      <Validation input={input} />
      <CharWrap splitWord={splitWord} input={input} />
      <Footer />
    </main>
  );
};

export default Main;
