"use client";
import { AUTH_CONTEXT } from "@/contexts/AuthContext";
import { User } from "@/lib/types";
import { authenticateWithJWT } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = { children: React.ReactNode };

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User>({});

    useEffect(() => {
        const authenticate = async () => {
            try {
                const newUser = await authenticateWithJWT();
                setUser(newUser);
            } catch (error) {
                return;
            }
        };

        authenticate();
    }, []);

    return (
        <AUTH_CONTEXT.Provider value={{ user, setUser }}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;
