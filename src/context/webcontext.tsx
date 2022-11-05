import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { Api } from "../services/api";
import { iUserLogin } from "../pages/login/index";
import { useNavigate } from "react-router-dom";
import { iEditRech } from "../components/perfilRech";
import { iComent } from "../components/formMessage";
import { toast } from "react-toastify";
import { iChat } from "../components/formChat";

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
  empresa: string | undefined;
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
  boxEdit: boolean;
  setBoxEdit: React.Dispatch<React.SetStateAction<boolean>>;
  inputPassRef: React.MutableRefObject<undefined>;
  allComents: iComent[];
  setModalComent: React.Dispatch<React.SetStateAction<boolean>>;
  openModalChat: () => void | undefined;
  setModalChat: React.Dispatch<React.SetStateAction<boolean>>;
  modalChat: boolean;
  chatId: string | undefined;
  setChatId: React.Dispatch<React.SetStateAction<any>>;
  onSubmitChat: (data: iChat) => void;
  allChats: iChat[];
  callId: string | undefined;
  setCallId: React.Dispatch<React.SetStateAction<any>>;
}

export const WebContext = createContext<iWebContext>({} as iWebContext);

export function WebProvider({ children }: iWebProvider) {
  const [user, setUser] = useState<iUser>();
  const [allUsers, setAllUsers] = useState();
  const [allComents, setAllComents] = useState<iComent[]>([]);
  const [allChats, setAllChats] = useState<iChat[]>([]);
  const [modalFeed, setModalFeed] = useState(false);
  const [modalComent, setModalComent] = useState(false);
  const [modalChat, setModalChat] = useState(false);
  const [modalReadComent, setModalReadComent] = useState(false);
  const [modalWriteComent, setModalWriteComent] = useState(false);
  const [comentId, setComentId] = useState();
  const [chatId, setChatId] = useState();
  const [callId, setCallId] = useState();
  const [boxEdit, setBoxEdit] = useState(false);
  const navigate = useNavigate();
  const inputPassRef = useRef();

  useEffect(() => {
    loadUser();
    getAllUsers();
    getAllComents();
    getAllChats();
  }, []);

  async function loadUser() {
    const token = localStorage.getItem("RPlace:Token");
    const id = localStorage.getItem("RPlace:id");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await Api.get(`/users/${id}`);

        setUser(data);
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

  async function getAllComents() {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await Api.get(`/coments`);

        setAllComents(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function getAllChats() {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await Api.get(`/chat`);

        setAllChats(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function onLogin(info: iUserLogin) {
    try {
      const { data } = await Api.post("/login", info);

      if (data) {
        localStorage.setItem("RPlace:Token", data.accessToken);
        localStorage.setItem("RPlace:id", data.user.id);

        setUser(data.user);
        navigate("/home");
      }
    } catch (error: any) {
      toast.success("Combinação de email/senha incorreta");

      console.log(error.response.data);
      return false;
    }
  }

  async function editSubmit(info: iEditRech) {
    const id = localStorage.getItem("RPlace:id");
    const token = localStorage.getItem("RPlace:Token");

    if (info.password === "") {
      delete info.password;
    }

    if (
      user?.name !== info.name ||
      user?.city !== info.city ||
      user?.email !== info.email ||
      info.password ||
      info.empresa !== ""
    ) {
      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          await Api.patch(`/users/${id}`, info);

          setUser({ ...user, ...info });
          setBoxEdit(false);

          toast.success("Usuário editado com sucesso");
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      toast.warning("Nenhum campo foi alterado");
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

  function openModalChat(): void {
    if (modalChat) {
      setModalChat(false);
    } else {
      setModalChat(true);
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

        setAllComents([...allComents, data]);
        setModalWriteComent(false);
        toast.success("Comentário enviado.");
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function onSubmitChat(data: iChat) {
    data.idTo = chatId;
    data.idFrom = String(user?.id);
    data.isRead = false;

    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.post(`/chat`, data);

        setAllChats([...allChats, data]);
        setModalChat(false);
        toast.success("Mensagem enviada.");
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
        setModalComent,
        readModalComent,
        modalReadComent,
        setModalReadComent,
        modalWriteComent,
        writeModalComent,
        setModalWriteComent,
        comentId,
        setComentId,
        onSubmitComent,
        boxEdit,
        setBoxEdit,
        inputPassRef,
        allComents,
        openModalChat,
        setModalChat,
        modalChat,
        chatId,
        setChatId,
        onSubmitChat,
        allChats,
        callId,
        setCallId,
      }}
    >
      {children}
    </WebContext.Provider>
  );
}
