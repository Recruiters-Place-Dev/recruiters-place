import React, { useContext } from "react";
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
import { Api } from "../../services/api";

interface iSend {
  chat: string | undefined;
  from: string | undefined;
  idFrom: string | undefined;
  isRead: boolean | undefined;
  idTo: string | undefined;
  to: string | undefined;
}

function Chat() {
  const { allChats, user, setCallId, callId } = useContext(WebContext);
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

  function onSubmitSendChat(data: iSend): void {
    data.idFrom = String(user?.id);
    data.from = user?.name;
    data.idTo = callId;
    // data.to =
    console.log(data);
  }

  return (
    <ContainerChat>
      <ul>
        {user?.isRecruiter
          ? filterUserMsgFromMeNoRepeat.map((chat) => (
              <li>
                <h1 id={chat.idTo} onClick={() => setCallId(chat.idTo)}>
                  {chat.to}
                </h1>
              </li>
            ))
          : filterUsersMsgToMeNoRepeat.map(
              (chat) =>
                chat.idTo === String(myId) && (
                  <li>
                    <h1 id={chat.idFrom} onClick={() => setCallId(chat.idFrom)}>
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
              (elemento) =>
                ((elemento.idTo === callId && elemento.idFrom === myId) ||
                  (elemento.idFrom === callId && elemento.idTo === myId)) && (
                  <div
                    className={
                      myId === elemento.idFrom ? "alignRigth" : "alignLeft"
                    }
                  >
                    <h1>{elemento.chat}</h1>
                  </div>
                )
            )
          ) : (
            <div>Nenhuma conversa aberta</div>
          )}
        </ContainerChatCall>
      </ContainerChatAll>

      <ContainerChatPerfil>Perfil recrutador</ContainerChatPerfil>
    </ContainerChat>
  );
}

export default Chat;
