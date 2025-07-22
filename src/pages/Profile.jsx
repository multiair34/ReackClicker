import { useUser } from "../providers/UserProvider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nickname: z
    .string()
    .min(2, "Минимальное кол-во символов 2")
    .max(10, "Максимальное кол-во символов 10"),
  info: z.string().max(100, "Максимальное кол-во символов 100").optional(),
  age: z.string().refine((num) => !isNaN(Number(num)) && Number(num) > 0, {
    message: "Возраст не может быть меньше 0",
  }),
  email: z.email(),
});

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: userEmail || "",
      nickname: userName || "",
      info: userInfo || "",
      age: userAge || "",
    },
  });

  const onSubmit = (data) => {
    setUserName(data.nickname);
    setUserEmail(data.email);
    setUserAge(data.age);
    setUserInfo(data.info);
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

      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="profile__field">
          <label className="profile__label">Новый никнейм: </label>
          <input
            className="popup__input"
            type="text"
            placeholder="введите новый никнейм"
            {...register("nickname")}
          />
          {errors.nickname && (
            <p className="profile__input-error">{errors.nickname.message}</p>
          )}
        </div>
        <div className="profile__field">
          <label className="profile__label">Информация о себе: </label>
          <input
            className="popup__input"
            type="text"
            placeholder="о себе"
            {...register("info")}
          />
          {errors.info && (
            <p className="profile__input-error">{errors.info.message}</p>
          )}
        </div>
        <div className="profile__field">
          <label className="profile__label">Ваш возраст: </label>
          <input
            className="popup__input"
            placeholder="возраст"
            {...register("age")}
          />
          {errors.age && (
            <p className="profile__input-error">{errors.age.message}</p>
          )}
        </div>
        <div className="profile__field">
          <label className="profile__label">Ваша почта: </label>
          <input
            className="popup__input"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="profile__input-error">{errors.email.message}</p>
          )}
        </div>
        <button className="popup__button" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}
