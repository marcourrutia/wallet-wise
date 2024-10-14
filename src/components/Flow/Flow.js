import React, { useState, useEffect, useContext } from "react";
import "./Flow.css";
import { BtnFlow } from "../BtnFlow/BtnFlow";
import { Context } from "../../store/context";
import { FlowItem } from "../FlowItem/FlowItem";
import { useNavigate } from "react-router-dom";

export const Flow = () => {
  const state = useContext(Context);

  const [isAdding, setIsAdding] = useState(false);
  const [newFlow, setNewFlow] = useState("");
  const [flows, setFlows] = useState([]);

  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const navigate = useNavigate();

  const handleFlowClick = (flowId) => {
    setSelectedAccountId(flowId);
    navigate(`/detailflow/${flowId}`);
  };

  const handleAddOrSave = () => {
    if (isAdding && newFlow.trim() !== "") {
      setFlows([...flows, newFlow]);
      state.actions.postFlow(newFlow);
      setNewFlow("");
    }
    setIsAdding(!isAdding);
  };

  const handleDeleteFlow = (flowId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this flow?"
    );
    if (isConfirmed) {
      state.actions.deleteFlow(flowId);
    }
  };

  useEffect(() => {
    state.actions.getFlow();
  }, []);

  return (
    <div className="card style-flow-general">
      <div className="financial-flow-title">
        <span className="span-title">Financial Flows</span>
        <BtnFlow isAdding={isAdding} onAddOrSave={handleAddOrSave} />
      </div>
      <div className="justify-content-end">
        <ul className="list-group list-group-flush group-flow">
          {isAdding && (
            <li className="list-group-item li-flow">
              <input
                className="input-flow"
                type="text"
                value={newFlow}
                onChange={(e) => setNewFlow(e.target.value)}
                placeholder="Name of flow..."
              />
            </li>
          )}
          {state.store.accounts.length > 0 ? (
            state.store.accounts.map((item, index) => {
              return (
                <FlowItem
                  key={item.id}
                  flow={item}
                  isDisabled={!item.state}
                  onDeleteFlow={handleDeleteFlow}
                  onFlowClick={handleFlowClick}
                  onDisableFlow={() => state.actions.updateStateFlow(item.id)}
                />
              );
            })
          ) : (
            <li className="list-group-item li-flow">
              <span>Add new account</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
