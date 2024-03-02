"use client";
import { AUTH_CONTEXT } from "@/contexts/AuthContext";
import { useContext } from "react";

const useAuth = () => useContext(AUTH_CONTEXT);

export default useAuth;
