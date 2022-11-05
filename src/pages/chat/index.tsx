import React, { useContext } from "react";
import { WebContext } from "../../context/webcontext";
import { ContainerChat } from "./style";

function Chat() {
  const { allChats, user } = useContext(WebContext);

  const filterUsers = allChats.filter((e, i) => allChats.indexOf(e) === i);
  console.log(filterUsers);
  return (
    <ContainerChat>
      <ul>
        {user?.isRecruiter
          ? allChats.map((chat) => (
              <li>
                <h1>{chat.to}</h1>
                <p></p>
              </li>
            ))
          : ""}
      </ul>
      <div>conversa</div>
      <div>Perfil recrutador</div>
    </ContainerChat>
  );
}

export default Chat;
