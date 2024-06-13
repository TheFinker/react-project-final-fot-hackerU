import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProvider";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { login, signup, userEdit } from "../services/usersApiService";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser, setToken } = useUser();

  const handleLogin = useCallback(
    async (userLogin) => {
      setIsLoading(true);
      setError(null);
      try {
        const token = await login(userLogin);
        setTokenInLocalStorage(token);
        setToken(token);
        setUser(getUser());
        navigate(ROUTES.CARDS);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate]
  );

  const handleLogout = useCallback(() => {
    navigate(ROUTES.ROOT);
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      setIsLoading(true);
      setError(null);
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [handleLogin]
  );

  const handleEditUser = useCallback(async (userFromClient) => {
    setIsLoading(true);
    setError(null);
    try {
      const normalizedUser = normalizeUser(userFromClient);

      await userEdit(normalizedUser);
      // setUser(normalizedUser) user._id
      // await signup(normalizedUser);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    handleLogin,
    handleLogout,
    handleSignup,
    handleEditUser,
  };
};

export default useUsers;
