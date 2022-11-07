import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { WebContext } from "../../context/webcontext";
import {
  ContainerChat,
  ContainerChatAll,
  ContainerChatCall,
  ContainerChatPerfil,
  ContainerInputSend,
} from "./style";
import send from "../../assets/send.png";
import FotoPerfil from "../../assets/carbon_user-avatar.svg";
import avatarTech from "../../assets/avatarTech.png";

export interface iSend {
  chat: string | undefined;
  from: string | undefined;
  idFrom: string | undefined;
  isRead: boolean | undefined;
  idTo: string | undefined;
  to: string | undefined;
}

function Chat() {
  const {
    allChats,
    user,
    setCallId,
    callId,
    onSubmitSendChat,
    allUsers,
    getAllChats,
  } = useContext(WebContext);
  const myId = localStorage.getItem("RPlace:id");
  const { register, handleSubmit } = useForm<iSend>({});

  /*                TO                    */
  /* TODOS QUE MANDARAM MENSAGEM PARA MIM */
  const filterUserMsgToMe = allChats.filter((elem) => elem.idTo === myId);
  /* TODOS QUE MANDARAM PRA MIM SEM REPETIR O MESMO */
  const filterUsersMsgToMeNoRepeat = filterUserMsgToMe.filter(
    (e, i) =>
      i ===
      filterUserMsgToMe.findIndex(
        (elem) => elem.idFrom === e.idFrom && elem.idTo === e.idTo
      )
  );

  /*                FROM                    */
  /* TODOS QUE ENVIEI MENSAGEM              */
  const filterUserMsgFromMe = allChats.filter((elem) => elem.idFrom === myId);
  /* TODOS QUE ENVIEI MENSAGEM SEM REPETIR  */
  const filterUserMsgFromMeNoRepeat = filterUserMsgFromMe.filter(
    (e, i) =>
      i ===
      filterUserMsgFromMe.findIndex(
        (elem) => elem.idFrom === e.idFrom && elem.idTo === e.idTo
      )
  );
  const developer = allUsers?.find((element) => String(element.id) === callId);
  useEffect(() => {
    getAllChats();
  }, []);

  return (
    <ContainerChat>
      <ul>
        {user?.isRecruiter
          ? filterUserMsgFromMeNoRepeat.map((chat) => (
              <li key={chat.idTo}>
                <h1 id={chat.idTo} onClick={() => setCallId(chat.idTo)}>
                  <img src={FotoPerfil} alt="" />
                  {chat.to}
                </h1>
              </li>
            ))
          : filterUsersMsgToMeNoRepeat.map(
              (chat) =>
                chat.idTo === String(myId) && (
                  <li key={chat.idFrom}>
                    <h1 id={chat.idFrom} onClick={() => setCallId(chat.idFrom)}>
                      <img src={avatarTech} alt="" />
                      {chat.from}
                    </h1>
                  </li>
                )
            )}
      </ul>
      <ContainerChatAll>
        <ContainerInputSend onSubmit={handleSubmit(onSubmitSendChat)}>
          <input type="text" {...register("chat")} />
          <button type="submit">
            <img src={send} alt="" />
          </button>
        </ContainerInputSend>
        <ContainerChatCall>
          {callId ? (
            allChats.map(
              (elemento, index) =>
                ((elemento.idTo === callId && elemento.idFrom === myId) ||
                  (elemento.idFrom === callId && elemento.idTo === myId)) && (
                  <div
                    key={index}
                    className={
                      myId === elemento.idFrom ? "alignRigth" : "alignLeft"
                    }
                  >
                    <h2>{elemento.chat}</h2>
                  </div>
                )
            )
          ) : (
            <div>Nenhuma conversa aberta</div>
          )}
        </ContainerChatCall>
      </ContainerChatAll>

      <ContainerChatPerfil>
        {callId && (
          <img src={developer?.isRecruiter ? avatarTech : FotoPerfil} alt="" />
        )}
        <h3>{developer?.name}</h3>
        <p>{developer?.isRecruiter ? "Tech Recruiter" : developer?.cargo}</p>
        {developer?.empresa && <p>{developer.empresa}</p>}
        <p>{developer?.linkedin}</p>
      </ContainerChatPerfil>
    </ContainerChat>
  );
}

export default Chat;
