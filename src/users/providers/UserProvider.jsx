import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { getToken, getUser } from "../services/localStorageService";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, setUser, search, setSearch, token, setToken }),
    [user, token, search, setSearch]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a Provider");
  return context;
};
