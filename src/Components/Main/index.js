import React from "react";
import Validation from "../Validation";
import CharWrap from "../CharWrap";
import Footer from "../Footer";

const Main = ({ input, splitWord }) => {
  return (
    <main>
      <div className="mainWrap">
        <Validation input={input} />
        <CharWrap splitWord={splitWord} input={input} />
        <Footer />
      </div>
    </main>
  );
};

export default Main;
