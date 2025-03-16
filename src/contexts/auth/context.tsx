import { User } from "firebase/auth";
import { createContext } from "react";

type AuthContext = {
    user?: User;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);