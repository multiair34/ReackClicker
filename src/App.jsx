import { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/menuElem/Menu";
import { useTheme } from "./providers/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import AuthPopup from "./components/AuthPopup";
import { useUser } from "./providers/UserProvider";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme();
  const { showModal } = useUser();

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <BrowserRouter>
      <div className="overlay">
        <div className={`bg ${theme}`}></div>
        <div className={`bg bg2 ${theme}`}></div>
        <div className={`bg bg3 ${theme}`}></div>
        {showMenu && <Menu onClickMenu={onClickMenu} />}
        {showModal && <AuthPopup />}
        <Header onClickMenu={onClickMenu} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
