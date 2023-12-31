import React from "react";
import "./title.css";

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <div id="heading">
        <h3>{subtitle}</h3>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
