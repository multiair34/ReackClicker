import { useState } from "react";
import { useUser } from "../providers/UserProvider";

export default function AuthPopup() {
  const [localName, setLocalName] = useState("");
  const { setUserName, setShowModal, setProfileImg, imageOptions } = useUser();

  const onChangeName = (e) => {
    setLocalName(e.target.value);
  };

  const onClickButton = (e) => {
    if (localName != "") {
      e.preventDefault();
      setShowModal(false);
      setUserName(localName);
    }
  };

  const handleSelect = (Img) => {
    setProfileImg(() => Img);
  };

  return (
    <div className="popup">
      <div className="popup__overlay">
        <form className="popup__form">
          <label className="popup__label">
            Выберете картинку профиля
            <div className="icon-grid">
              {imageOptions.map(({ name, Img }) => (
                <button
                  type="button"
                  key={name}
                  className="icon-button"
                  onClick={() => handleSelect(Img)}
                >
                  <div className="icon-avatar">
                    <Img size={50} />
                  </div>
                  <div className="icon-name">{name}</div>
                </button>
              ))}
            </div>
          </label>
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
