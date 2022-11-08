import {
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Api } from "../services/api";
import { iUserLogin } from "../pages/login/index";
import { useNavigate } from "react-router-dom";
import { iEditRech } from "../components/perfilRech";
import { iComent } from "../components/formMessage";
import { toast } from "react-toastify";
import { iChat } from "../components/formChat";
import { iSend } from "../pages/chat";
import { iUserRegister } from "../components/formregister";
import techList from "../mockList/devTechs.json";

export interface iWebProvider {
  children: ReactNode;
}

export interface iUser {
  id?: number;
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
  fotoDoPerfil?: string;
  tech: {
    html?: boolean | undefined;
    css?: boolean | undefined;
    js?: boolean | undefined;
    react?: boolean | undefined;
    ts?: boolean | undefined;
    angular?: boolean | undefined;
    vuejs?: boolean | undefined;
    php?: boolean | undefined;
    c?: boolean | undefined;
    sass?: boolean | undefined;
    node?: boolean | undefined;
  };
}

export interface iWebContext {
  onLogin: (info: iUserLogin) => void;
  onRegister: (data: iUserRegister) => Promise<void>;
  resolved: boolean | undefined;
  setResolved: Dispatch<SetStateAction<boolean | undefined>>;
  editSubmit: (info: iEditRech) => void;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  user: iUser | undefined;
  allUsers: iUser[] | undefined;
  modalFeed: boolean;
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
  setModalFeed: Dispatch<SetStateAction<boolean>>;
  setModalComent: React.Dispatch<React.SetStateAction<boolean>>;
  setModalChat: React.Dispatch<React.SetStateAction<boolean>>;
  modalChat: boolean;
  chatId: string | undefined;
  setChatId: React.Dispatch<React.SetStateAction<any>>;
  onSubmitChat: (data: iChat) => void;
  allChats: iChat[];
  callId: string | undefined;
  setCallId: React.Dispatch<React.SetStateAction<any>>;
  filteredTechs(elem: iUser): ({ tech: string; dir: string } | undefined)[];
  onSubmitSendChat: (data: iSend) => void;
  getAllUsers: () => void;
  getAllChats: () => void;
  filterDevelopers: iUser[] | undefined;
  setFilterDevelopers: React.Dispatch<
    React.SetStateAction<iUser[] | undefined>
  >;
  deleteComent: (s: string) => void;
  logOff: boolean;
  setLogOff: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [logOff, setLogOff] = useState(false);
  const [filterDevelopers, setFilterDevelopers] = useState<iUser[]>();

  const [resolved, setResolved] = useState<boolean | undefined>();
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const { data } = await Api.post("/login", info);

      if (data) {
        localStorage.setItem("RPlace:Token", data.accessToken);
        localStorage.setItem("RPlace:id", data.user.id);

        setUser(data.user);
        setLoading(false);
        navigate("/home");
      }
    } catch (error: any) {
      setLoading(false);
      toast.error("Combinação de email/senha incorreta");

      console.log(error.response.data);
      return false;
    }
  }

  async function onRegister(data: iUserRegister): Promise<void> {
    const { isRecruiter } = data;

    if (!isRecruiter) {
      const devData = {
        name: data.name,
        email: data.email,
        password: data.password,
        isRecruiter: data.isRecruiter,
        city: data.city === "" ? null : data.city,
        schooling: data.schooling === "" ? null : data.schooling,
        vacancy: data.vacancy === "" ? null : data.vacancy,
        isWork: data.isWork,
        linkedin: data.linkedin === "" ? null : data.linkedin,
        github: data.github === "" ? null : data.github,
        portfolio: data.portfolio === "" ? null : data.portfolio,
        tech: data.tech,
      };

      try {
        await Api.post("/users", devData);
        setResolved(true);
      } catch (error) {
        setResolved(false);
      }
    } else {
      const recruiterData = {
        name: data.name,
        email: data.email,
        password: data.password,
        isRecruiter: data.isRecruiter,
      };

      try {
        await Api.post("/users", recruiterData);
        setResolved(true);
      } catch (error) {
        setResolved(false);
      }
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

          setUser({ ...user, ...info, tech: {} });
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

  function writeModalComent(): void {
    setModalComent(!modalComent);
    setModalWriteComent(true);
  }

  function readModalComent(): void {
    setModalComent(!modalComent);
    setModalReadComent(true);
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

  async function deleteComent(event: string) {
    const token = localStorage.getItem("RPlace:Token");
    console.log(event);
    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.delete(`/coments/${event}`);
        getAllComents();
        setAllComents([...allComents]);
        toast.success("Comentário apagado.");
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

  function filteredTechs(elem: iUser) {
    // getAllUsers()

    // const developers = allUsers?.filter(
    //   (elem: iUser) => elem.isRecruiter === false
    // );
    // const retorno = developers?.map((elem: iUserDeveloper) => {
    const separateTechs = Object.entries<boolean>(
      elem.tech as { [s: string]: boolean } | ArrayLike<boolean>
    );
    const filterTechs = separateTechs.filter((elem) => {
      return elem[1] === true;
    });

    const arrFilteredTechs = filterTechs.map((elem) => {
      return techList.find((E) => elem[0] === E.tech);
    });
    return arrFilteredTechs;
    // })
  }

  async function onSubmitSendChat(data: iSend) {
    data.idTo = callId;
    const findTo = allChats.find((element) => element.idTo === callId);
    data.idFrom = String(user?.id);
    data.from = user?.name;
    data.to = findTo?.to;
    data.isRead = false;
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.post(`/chat`, data);

        setAllChats([...allChats, data]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <WebContext.Provider
      value={{
        onLogin,
        onRegister,
        resolved,
        setResolved,
        editSubmit,
        setUser,
        user,
        allUsers,
        modalFeed,
        setModalFeed,
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
        setModalChat,
        modalChat,
        chatId,
        setChatId,
        onSubmitChat,
        allChats,
        callId,
        setCallId,
        filteredTechs,
        onSubmitSendChat,
        getAllUsers,
        getAllChats,
        filterDevelopers,
        setFilterDevelopers,
        deleteComent,
        logOff,
        setLogOff,
        loading,
        setLoading,
      }}
    >
      {children}
    </WebContext.Provider>
  );
}
