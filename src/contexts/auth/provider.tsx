import { signInWithPopup, User } from "firebase/auth";
import { AuthContext } from "./context";
import { ReactNode, useEffect } from "react";
import { auth, googleProvider } from "../../assets/libs/firebase.tsx";
import { useState } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | undefined>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
            }
        });

        return () => unsubscribe();
    }, []);

    async function login() {
        const res = await signInWithPopup(auth, googleProvider);
        setUser(res.user);
        console.log(res.user);
    }

    async function logout() {
        await auth.signOut();
        setUser(undefined);
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}