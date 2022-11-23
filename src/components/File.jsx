import React from "react";
import "./File.css";

function File({ name }) {
  return (
    <div className={"file"}>
      <i className={"fa-solid fa-file"}></i>
      {name}
    </div>
  );
}

export default File;
