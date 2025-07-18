import { Link } from "react-router";
import { useUser } from "../providers/UserProvider";

export default function Header({ onClickMenu }) {
  const { userName, ProfileImg } = useUser();

  return (
    <div className="header">
      <div className="menu_btn" onClick={onClickMenu}>
        menu
      </div>
      <Link to="/">
        <h1>ReactClicker</h1>
      </Link>
      <Link to="/profile" className="profile">
        {ProfileImg && <ProfileImg size={50} />}
        <span className="profile_name">{userName}</span>
      </Link>
    </div>
  );
}
