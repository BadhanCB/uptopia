import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { User } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const createJWT = async (payload: User) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jwt`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        return res.json();
    } catch (error) {
        let errMsg = "Failed to Create JWT Token";
        if (error instanceof Error) {
            errMsg = error.message;
        }
        throw new Error(errMsg);
    }
};

export const authenticateWithJWT = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jwt`);
        return res.json();
    } catch (error) {
        let errMsg = "Failed to authenticate";
        if (error instanceof Error) {
            errMsg = error.message;
        }
        throw new Error(errMsg);
    }
};

export const slugify = (payload: string) =>
    payload.toLowerCase().split(" ").join("-") + "-" + Date.now();
