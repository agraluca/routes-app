import {
  createContext,
  useCallback,
  useContext,
  // useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";

import * as paths from "routes/paths";

// import jwtDecode from "jwt-decode";
// import axios from "axios";

export type UserCredentialsProps = {
  token: string;
  username: string;
  profile: string[];
};

export type AuthContextProps = {
  userCredentials: UserCredentialsProps | null;
  loading: boolean;
  logIn: (url: string) => void;
  logOut: () => void;
  handleSetUserCredentials: (user: UserCredentialsProps) => void;
};

export const AuthContextDefaultValues = {
  userCredentials: {
    token: "basic",
    username: "John Doe",
    profile: ["HOME"],
  },
  loading: false,
  logIn: () => null,
  logOut: () => null,
  handleSetUserCredentials: () => null,
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  AuthContextDefaultValues
);

function AuthProvider({ children }: AuthProviderProps) {
  const { push } = useHistory();
  const [userCredentials, setUserCredentials] =
    useState<UserCredentialsProps | null>(null);

  const [loading, setLoading] = useState(false);

  const logIn = useCallback(
    /*async (url*/ (token) => {
      try {
        setLoading(true);
        localStorage.setItem("token", JSON.stringify(token));
        // When a api exists
        // const response = await axios.get(url);

        // if (response.status === 200) {
        //   setUserCredentials(response.data);
        // }
      } catch (err) {
        console.log("err", err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_credentials");
    setUserCredentials(null);
    push(paths.home);
  }, [push]);

  const handleSetUserCredentials = useCallback((user) => {
    setUserCredentials(user);
    localStorage.setItem("user_credentials", JSON.stringify(user));
  }, []);
  // When a api exists
  // useEffect(() => {
  //   const localStorageUserData = jwtDecode(localStorage.getItem("token"));

  //   localStorageUserData
  //     ? setUserCredentials(localStorageUserData)
  //     : setUserCredentials(null);
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        userCredentials,
        loading,
        logIn,
        logOut,
        handleSetUserCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
