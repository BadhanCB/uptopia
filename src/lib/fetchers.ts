import { LoginInfo, SignupInfo } from "./types";

const signupWithEmailAndPassword = async (info: SignupInfo) => {
    const res = await fetch(`https://uptopia.vercel.app/api/signup`, {
        method: "POST",
        body: JSON.stringify(info),
    });

    if (!res.ok) {
        let errMsg: string;
        errMsg = (await res.json()).message;
        if (!errMsg) {
            errMsg = res.statusText;
        } else if (!errMsg) {
            errMsg = "Failed to signup";
        }

        throw new Error(errMsg);
        return;
    }

    return res.json();
};

const loginWithEmailAndPassword = async (info: LoginInfo) => {
    const res = await fetch(`https://uptopia.vercel.app/api/login`, {
        method: "POST",
        body: JSON.stringify(info),
    });

    if (!res.ok) {
        let errMsg: string;
        errMsg = (await res.json()).message;
        if (!errMsg) {
            errMsg = res.statusText;
        } else if (!errMsg) {
            errMsg = "Failed to Login";
        }

        throw new Error(errMsg);
        return;
    }

    return res.json();
};

const createNewProperty = async (formData: FormData) => {
    const res = await fetch(`https://uptopia.vercel.app/api/property`, {
        method: "POST",
        body: formData,
    });

    if (!res.ok) {
        let errMsg: string;
        errMsg = (await res.json()).message;
        if (!errMsg) {
            errMsg = res.statusText;
        } else if (!errMsg) {
            errMsg = "Failed to Login";
        }

        throw new Error(errMsg);
        return;
    }

    return res.json();
};

export {
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    createNewProperty,
};
