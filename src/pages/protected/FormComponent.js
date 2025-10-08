import react from "react";

const FormComponent = ({ show, onClose, children }) => {
  if (!show) {
    return null; // Don't render if 'show' is false
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default FormComponent;
