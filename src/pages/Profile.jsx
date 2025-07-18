import { useState } from "react";
import { useUser } from "../providers/UserProvider";

export default function Profile() {
  const {
    userName,
    setUserName,
    userInfo,
    setUserInfo,
    userAge,
    setUserAge,
    userEmail,
    setUserEmail,
    ProfileImg,
  } = useUser();

  const [tempName, setTempName] = useState(userName);
  const [tempInfo, setTempInfo] = useState(userInfo);
  const [tempAge, setTempAge] = useState(userAge);
  const [tempEmail, setTempEmail] = useState(userEmail);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserName(tempName);
    setUserEmail(tempEmail);
    setUserAge(tempAge);
    setUserInfo(tempInfo);
  };

  return (
    <div className="profile">
      <div className="profile__card">
        <div className="profile__card-main">
          <div className="profile__img">
            {ProfileImg && <ProfileImg size={50} />}
          </div>
          <div className="profile__info">
            <p className="profile__name">nickname: {userName}</p>
            <p>age: {userAge}</p>
            <p>email: {userEmail}</p>
          </div>
        </div>
        <p className="profile__description">{userInfo}</p>
      </div>

      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__field">
          <label className="profile__label">Новый никнейм: </label>
          <input
            className="popup__input"
            type="text"
            placeholder="введите новый никнейм"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
        </div>
        <div className="profile__field">
          <label className="profile__label">Информация о себе: </label>
          <input
            className="popup__input"
            type="text"
            placeholder="о себе"
            value={tempInfo}
            onChange={(e) => setTempInfo(e.target.value)}
          />
        </div>
        <div className="profile__field">
          <label className="profile__label">Ваш возраст: </label>
          <input
            className="popup__input"
            type="number"
            placeholder="возраст"
            value={tempAge}
            onChange={(e) => setTempAge(e.target.value)}
          />
        </div>
        <div className="profile__field">
          <label className="profile__label">Ваша почта: </label>
          <input
            className="popup__input"
            type="email"
            placeholder="email"
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
          />
        </div>
        <button className="popup__button" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}
