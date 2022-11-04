import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../services/api";
import { iUserLogin } from "../pages/login/index";
import { useNavigate } from "react-router-dom";

interface iWebProvider {
  children: ReactNode;
}

interface iWebContext {
  onLogin: (info: iUserLogin) => void;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  user: any;
}

export const WebContext = createContext<iWebContext>({} as iWebContext);

export function WebProvider({ children }: iWebProvider) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  console.log(user)

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const token = localStorage.getItem("RPlace:Token");
    const id = localStorage.getItem("RPlace:id");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.get(`/users/${id}`).then((resp) => {
          setUser(resp.data);
        });
      } catch (error) {
        window.localStorage.clear();
      }
    }
  }

  async function onLogin(info: iUserLogin) {
    const logUser = await Api.post("/login", info)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err.response.data);
        return false;
      });
    if (logUser) {
      localStorage.setItem("RPlace:Token", logUser.accessToken);
      localStorage.setItem("RPlace:id", logUser.user.id);
      setTimeout(() => navigate("/home"), 500);
    }
  }

  return (
    <WebContext.Provider value={{ user, onLogin, setUser }}>
      {children}
    </WebContext.Provider>
  );
}
