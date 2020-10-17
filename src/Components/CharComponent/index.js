import React from "react";

const CharComponent = ({ letter, removechar }) => {
  return (
    <div className="letterWrap" onClick={removechar}>
      <p>{letter}</p>
    </div>
  );
};

export default CharComponent;
