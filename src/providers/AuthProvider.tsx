"use client";
import { AUTH_CONTEXT } from "@/contexts/AuthContext";
import { User } from "@/lib/types";
import { useState } from "react";

type Props = { children: React.ReactNode };

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User>({});

    return (
        <AUTH_CONTEXT.Provider value={{ user, setUser }}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;
