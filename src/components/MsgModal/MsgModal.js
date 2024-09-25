import "./MsgModal.css";

export const MsgModal = ({ message, onClose, action }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <p>{message}</p>
        <button
          onClick={() => {
            onClose();
            action();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
