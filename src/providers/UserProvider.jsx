import { createContext, useContext, useState } from "react";

const UserContext = createContext({});
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [userName, setUserName] = useState("noname");
  const [showModal, setShowModal] = useState(true);

  return (
    <UserContext.Provider
      value={{ userName, setUserName, showModal, setShowModal }}
    >
      {children}
    </UserContext.Provider>
  );
}
