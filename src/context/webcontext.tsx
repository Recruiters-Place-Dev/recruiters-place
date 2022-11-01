import { createContext, ReactNode } from "react";

interface iWebProvider {
  children: ReactNode
}
export const WebContext = createContext({});

export function WebProvider({ children }: iWebProvider) {

  return (
    <WebContext.Provider value={""}>
      {children}
    </WebContext.Provider>
  );
}
