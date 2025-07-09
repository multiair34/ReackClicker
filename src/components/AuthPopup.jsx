import { useState } from "react";
import { useUser } from "../providers/UserProvider";

export default function AuthPopup() {
  const [localName, setLocalName] = useState("");
  const { setUserName, setShowModal } = useUser();

  const onChangeName = (e) => {
    setLocalName(e.target.value);
  };

  const onClickButton = (e) => {
    e.preventDefault();
    setShowModal(false);
    setUserName(localName);
  };

  return (
    <div className="popup">
      <div className="popup__overlay">
        <form className="popup__form">
          <label className="popup__label">
            Введите никнейм
            <input
              onChange={onChangeName}
              className="popup__input"
              type="text"
            />
          </label>

          <button
            onClick={onClickButton}
            className="popup__button"
            type="submit"
          >
            OK
          </button>
        </form>
      </div>
    </div>
  );
}
