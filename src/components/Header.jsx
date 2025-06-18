import { Link } from "react-router";

export default function Header({ onClickMenu }) {
  return (
    <div className="header">
      <div className="menu_btn" onClick={onClickMenu}>
        menu
      </div>
      <Link to="/">
        <h1>ReactClicker</h1>
      </Link>
      <Link to="/profile" className="profile">
        <img src="public/user-light.png" alt="#" className="profile_img" />
        <span className="profile_name">Kirill</span>
      </Link>
    </div>
  );
}
