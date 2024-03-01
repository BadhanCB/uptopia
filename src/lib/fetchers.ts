import { SignupInfo } from "./types";

const signupWithEmailAndPassword = async (info: SignupInfo) => {
    const res = await fetch("http://localhost:3000/api/signup", {
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

export { signupWithEmailAndPassword };
