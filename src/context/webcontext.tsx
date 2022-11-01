import { createContext, ReactNode } from "react";
import { Api } from "../services/api"
import { iUserLogin } from "../pages/login/index"

interface iWebProvider {
  children: ReactNode
}

interface iWebContext {
  onLogin: (info: iUserLogin) => void;
}

export const WebContext = createContext<iWebContext>({} as iWebContext);

export function WebProvider({ children }: iWebProvider) {

  async function onLogin(info: iUserLogin){
    const logUser = await Api
    .post('/sessions', info)
    .then((res) => res.data)
    .catch((err => {
        console.log(err)
        return false
    }))
    console.log(logUser);
    // if(logUser){
    //     localStorage.setItem("RPlace:Token", logUser.token);
    //     setTimeout(() => window.location.replace('./home'), 500);
    // }
  }

  return (
    <WebContext.Provider value={{ onLogin }}>
      {children}
    </WebContext.Provider>
  );
}
