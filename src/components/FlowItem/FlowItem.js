import React from "react";
import { BsTrash } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./FlowItem.css";

export const FlowItem = ({ flow, onDeleteFlow, onDisableFlow, isDisabled, onFlowClick }) => {
  const handleDisableClick = () => {
    console.log("Disabling/enabling flow with ID: ", flow.id);
    onDisableFlow(flow.id);
  };

  return (
    <li
      className={`list-group-item li-flow ${isDisabled ? "disabled-item" : ""}`}
    >
      {isDisabled ? (
        <span className="flow-name" onClick={() => onFlowClick(flow.id)}>{flow.name}</span>
      ) : (
        <Link to={`/detailflow/${flow.id}`} className="flow-name">
          {flow.name}
        </Link>
      )}
      <div className="icon-flow">
        <div
          className={`icon-circle ${isDisabled ? "disabled-icon" : ""}`}
          onClick={handleDisableClick}
        >
          <CgUnavailable />
        </div>
        <div className="icon-circle">
          <BsTrash
            onClick={() => !isDisabled && onDeleteFlow(flow.id)}
            style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
          />
        </div>
      </div>
    </li>
  );
};