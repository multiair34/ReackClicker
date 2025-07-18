import { createContext, use, useContext, useState } from "react";
import { Cat, Dog, Panda, Bug } from "lucide-react";

const UserContext = createContext({});
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [userName, setUserName] = useState("noname");
  const [showModal, setShowModal] = useState(true);
  const [ProfileImg, setProfileImg] = useState(Bug);
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState();
  const [userInfo, setUserInfo] = useState("Info");
  const imageOptions = [
    { name: "Cat", Img: Cat },
    { name: "Dog", Img: Dog },
    { name: "Panda", Img: Panda },
  ];

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        showModal,
        setShowModal,
        ProfileImg,
        setProfileImg,
        userEmail,
        setUserEmail,
        userAge,
        setUserAge,
        userInfo,
        setUserInfo,
        imageOptions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
