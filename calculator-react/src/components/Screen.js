import Textfit from "react-textfit/lib/Textfit";
import "./Screen.css";
import React from "react";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single">
      {value}
    </Textfit>
  );
};

export default Screen;
