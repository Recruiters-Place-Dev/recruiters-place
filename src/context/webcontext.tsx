import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../services/api";
import { iUserLogin } from "../pages/login/index";
import { useNavigate } from "react-router-dom";
import { iEditRech } from "../components/perfilRech";
import { iComent } from "../components/formMessage";

interface iWebProvider {
  children: ReactNode;
}

export interface iUser {
  email: string;
  name: string;
  isRecruiter?: boolean;
  city: string | undefined;
  schooling?: string | undefined;
  cargo?: string | undefined;
  isWork?: boolean | undefined;
  linkedin: string | undefined;
  github?: string | undefined;
  portfolio?: string | undefined;
  bio?: string | undefined;
  tech?: {
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
  id?: number;
}

export interface iWebContext {
  onLogin: (info: iUserLogin) => void;
  editSubmit: (info: iEditRech) => void;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  user: iUser | undefined;
  allUsers: [] | undefined;
  openModalFeed: () => void;
  modalFeed: boolean;
  openModalComent: () => void;
  modalComent: boolean;
  modalReadComent: boolean;
  readModalComent: () => void;
  setModalReadComent: React.Dispatch<React.SetStateAction<boolean>>;
  modalWriteComent: boolean;
  writeModalComent: () => void;
  setModalWriteComent: React.Dispatch<React.SetStateAction<boolean>>;
  comentId: string | undefined;
  setComentId: React.Dispatch<React.SetStateAction<any>>;
  onSubmitComent: (data: iComent) => void;
}

export const WebContext = createContext<iWebContext>({} as iWebContext);

export function WebProvider({ children }: iWebProvider) {
  const [user, setUser] = useState<iUser>();
  const [allUsers, setAllUsers] = useState();
  const [modalFeed, setModalFeed] = useState(false);
  const [modalComent, setModalComent] = useState(false);
  const [modalReadComent, setModalReadComent] = useState(false);
  const [modalWriteComent, setModalWriteComent] = useState(false);
  const [comentId, setComentId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
    getAllUsers();
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
        console.log(error);
        window.localStorage.clear();
      }
    }
  }
  async function getAllUsers() {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await Api.get(`/users/`);

        setAllUsers(data);
      } catch (error) {
        console.log(error);
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

      setUser(logUser.user);
      setTimeout(() => {
        navigate("/home");
      }, 500);
    }
  }

  async function editSubmit(info: iEditRech) {
    const id = localStorage.getItem("RPlace:id");
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;

        if (info.password === "") {
          delete info.password;
        }

        await Api.patch(`/users/${id}`, info);

        setUser({ ...user, ...info });
      } catch (error) {
        console.log(error);
      }
    }
  }

  function openModalFeed(): void {
    if (modalFeed) {
      setModalFeed(false);
    } else {
      setModalFeed(true);
    }
  }

  function openModalComent(): void {
    if (modalComent) {
      setModalComent(false);
    } else {
      setModalComent(true);
    }
  }

  function readModalComent(): void {
    openModalComent();
    setModalReadComent(true);
  }
  function writeModalComent(): void {
    openModalComent();
    setModalWriteComent(true);
  }

  async function onSubmitComent(data: iComent) {
    data.idTo = comentId;
    data.idFrom = String(user?.id);

    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.post(`/coments`, data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <WebContext.Provider
      value={{
        onLogin,
        editSubmit,
        setUser,
        user,
        allUsers,
        openModalFeed,
        modalFeed,
        openModalComent,
        modalComent,
        readModalComent,
        modalReadComent,
        setModalReadComent,
        modalWriteComent,
        writeModalComent,
        setModalWriteComent,
        comentId,
        setComentId,
        onSubmitComent,
      }}
    >
      {children}
    </WebContext.Provider>
  );
}
