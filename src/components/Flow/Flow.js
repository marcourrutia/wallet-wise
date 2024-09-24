import React, { useState, useEffect, useContext } from "react";
import "./Flow.css";
import { BtnFlow } from "../BtnFlow/BtnFlow";
import { BsTrash } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";
import { Context } from "../../store/context";

export const Flow = (props) => {
  const state = useContext(Context);

  const [isAdding, setIsAdding] = useState(false);
  const [newFlow, setNewFlow] = useState("");
  const [flows, setFlows] = useState([]);

  const handleAddOrSave = () => {
    if (isAdding && newFlow.trim() !== "") {
      setFlows([...flows, newFlow]);
      state.actions.postFlow(newFlow);
      setNewFlow("");
    }
    setIsAdding(!isAdding);
  };

  const deleteFlow = () => {

  } 

  const handleDeleteFlow = (flowId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this flow?");
    if (isConfirmed) {
      state.actions.deleteFlow(flowId);
    }
  };

  useEffect(() => {
    state.actions.getFlow();
  }, []);

  return (
    <div className="container-fluid">
      <div className="justify-content-end d-flex">
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
                    <div key={index}>
                      <li className="list-group-item li-flow">
                        <span>{item.name}</span>
                        <div className="icon-flow">
                          <div className="icon-circle">
                            <CgUnavailable />
                          </div>
                          <div className="icon-circle">
                            <BsTrash onClick={() => handleDeleteFlow(item.id)}/>
                          </div>
                        </div>
                      </li>
                    </div>
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
      </div>
    </div>
  );
};
