import React from "react";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  buttonText,
  onSubmit,
}) {
  return (
    <div
      className={`${`popup popup_type_${name}`} ${isOpen ? "popup_open" : ""}`}
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button"
          aria-label="close"
          className="popup__close-button"
        ></button>
        <form name={name} className="popup__form" onSubmit={onSubmit}>
          <h3 className="popup__form-title">{title}</h3>
          {children}
          <button type="submit" className="button popup__form-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export { PopupWithForm };
