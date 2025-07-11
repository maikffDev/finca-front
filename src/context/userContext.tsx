import { createContext, useContext, useState, ReactNode } from "react";
import { IUser } from "../types/user";

// TODO : agregar las llamadas a Login y Register con JWT, una vez finalizado el back de esos endpoints


interface UserContextType {
  user: IUser;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user] = useState<IUser>({
    userId: 1, 
    username: "usuario",
    email:"matias@mail.com",
    active:true,
    rollId:1
  });

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de un UserProvider");
  }
  return context;
};