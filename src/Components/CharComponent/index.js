import React from "react";

const CharComponent = ({ letter }) => {
  return (
    <div className="letterWrap">
      <p>{letter}</p>
    </div>
  );
};

export default CharComponent;
