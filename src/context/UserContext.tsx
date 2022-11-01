import react, { createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }: any) {
  return <UserContext.Provider value={""}>{children}</UserContext.Provider>;
}
