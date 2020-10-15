import React from "react";
import Input from "../Input";

const Header = () => {
  return (
    <header>
      <div className="animationArea">
        <ul class="blocks">
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
        <Input />
      </div>
    </header>
  );
};

export default Header;
