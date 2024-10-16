import "./SelectFlow.css";
import { Context } from "../../store/context";
import { useContext, useEffect, useState } from "react";

export const SelectFlow = () => {
  const { store, actions } = useContext(Context);
  const [flowData, setFlowData] = useState([]);

  useEffect(() => {
    if (store.accounts.length > 0) {
      const activeFlows = store.accounts.filter((c) => c.state === true);
      setFlowData(activeFlows);
      if (activeFlows.length > 0) {
        actions.setFlowSelected(activeFlows[0].id);
      } else {
        setFlowData([]);
        actions.setFlowSelected("");
      }
    } else {
      setFlowData([]);
      actions.setFlowSelected("");
    }
  }, [store.accounts]);

  const handleOnChange = (e) => {
    actions.setFlowSelected(e.target.value);
  };

  return (
    <select
      className="dash-select-flow"
      value={store.flowSelected}
      onChange={handleOnChange}
      required
    >
      {flowData.length === 0 ? (
        <option value="">No flows...</option>
      ) : (
        <>
          {flowData.map((data) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </>
      )}
    </select>
  );
};
