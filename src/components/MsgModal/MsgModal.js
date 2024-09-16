import "./MsgModal.css";

export const MsgModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
