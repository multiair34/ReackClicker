import { useState } from "react";
import Settings from "./Settings";
import About from "./About";

export default function Menu({ onClickMenu }) {
  const [openSettings, setOpenSettings] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const onOpenSettings = () => {
    setOpenSettings(!openSettings);
  };
  const onOpenAbout = () => {
    setOpenAbout(!openAbout);
  };

  return (
    <div className="menu">
      <div>
        <li onClick={onOpenSettings}>options</li>
        <li onClick={onOpenAbout}>about</li>
        <button onClick={onClickMenu}>exit</button>
      </div>
      {openAbout && <About />}

      {openSettings && <Settings />}
    </div>
  );
}
