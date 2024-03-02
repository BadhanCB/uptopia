"use client";
import { User } from "@/lib/types";
import { Dispatch, SetStateAction, createContext } from "react";

type AuthContextType = {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
};

export const AUTH_CONTEXT = createContext<AuthContextType>({
    user: {},
    setUser: () => {},
});
