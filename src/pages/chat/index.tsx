import React, { useContext } from "react";
import { WebContext } from "../../context/webcontext";
import { ContainerChat, ContainerChatCall } from "./style";

function Chat() {
  const { allChats, user, setCallId, callId } = useContext(WebContext);

  const filterUsers = allChats.filter(
    (e, i) => i === allChats.findIndex((elem) => elem.idTo === e.idTo)
  );
  const myId = localStorage.getItem("RPlace:id");
  console.log(allChats);
  return (
    <ContainerChat>
      <ul>
        {user?.isRecruiter
          ? filterUsers.map((chat) => (
              <li>
                <h1 id={chat.idTo} onClick={() => setCallId(chat.idTo)}>
                  {chat.to}
                </h1>
              </li>
            ))
          : ""}
      </ul>
      <ContainerChatCall>
        {callId ? (
          allChats.map((elemento) =>
            (elemento.idTo === callId && elemento.idFrom === myId) ||
            (elemento.idFrom === callId && elemento.idTo === myId)
              ? "sda"
              : ""
          )
        ) : (
          <div>Nenhuma conversa aberta</div>
        )}
      </ContainerChatCall>
      <div>Perfil recrutador</div>
    </ContainerChat>
  );
}

export default Chat;
