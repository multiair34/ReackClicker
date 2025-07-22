import { Link } from "react-router";
import { useUser } from "../providers/UserProvider";
import { Menu } from "lucide-react";

export default function Header({ onClickMenu }) {
  const { userName, ProfileImg } = useUser();

  return (
    <div className="header">
      <div className="menu_btn" onClick={onClickMenu}>
        <Menu size={36} />
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
