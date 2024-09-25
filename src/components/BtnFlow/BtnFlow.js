import "./BtnFlow.css";
import React from "react";

export const BtnFlow = (props) => {
  return (
    <div className="btn-flow" onClick={props.onAddOrSave}>
      <span>{props.isAdding ? "Save" : "New flow"}</span>{" "}
    </div>
  );
};
