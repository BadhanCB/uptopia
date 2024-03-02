import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { User } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const createJWT = async (payload: User) => {
    try {
        const res = await fetch("http://localhost:3000/api/jwt", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const authenticateWithJWT = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/jwt");
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
