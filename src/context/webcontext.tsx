import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../services/api";
import { iUserLogin } from "../pages/login/index";
import { useNavigate } from "react-router-dom";

interface iWebProvider {
  children: ReactNode;
}

interface iUser {
  email: string;
  name: string;
  isRecruiter: boolean;
  city: string | undefined;
  schooling: string | undefined;
  cargo: string | undefined;
  isWork: boolean | undefined;
  linkedin: string | undefined;
  github: string | undefined;
  portfolio: string | undefined;
  tech: {
    html: boolean;
    css: boolean;
    js: boolean;
    react: boolean;
    ts: boolean;
    angular: boolean;
    vuejs: boolean;
    php: boolean;
    c: boolean;
  };
  id: number;
}

export interface iWebContext {
  onLogin: (info: iUserLogin) => void;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  user: iUser | undefined;
}

export const WebContext = createContext<iWebContext>({} as iWebContext);

export function WebProvider({ children }: iWebProvider) {
  const [user, setUser] = useState<iUser>();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const token = localStorage.getItem("RPlace:Token");
    const id = localStorage.getItem("RPlace:id");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const request = await Api.get(`/users/${id}`);
        setUser(request.data);
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
      setUser(logUser.data);
      setTimeout(() => {
        navigate("/home");
      }, 500);
    }
  }

  return (
    <WebContext.Provider value={{ onLogin, setUser, user }}>
      {children}
    </WebContext.Provider>
  );
}
