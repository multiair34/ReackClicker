export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__card">
        <div className="profile__card-main">
          <img
            className="profile__avatar"
            src="public/user-light.png"
            alt="#"
          />

          <p className="profile__name">nickname: Nickname</p>
        </div>
        <p className="profile__description">lorem30</p>
      </div>
      <form className="profile__form" action="" method="get">
        <div className="profile__field">
          <label className="profile__label">Новый никнейм: </label>
          <input
            className="profile__input"
            type="text"
            placeholder="введите новый никнейм"
          />
        </div>
        <div className="profile__field">
          <label className="profile__label">Информация о себе: </label>
          <input className="profile__input" type="text" placeholder="о себе" />
        </div>
        <button className="profile__button" type="button">
          Сохранить
        </button>
      </form>
    </div>
  );
}
