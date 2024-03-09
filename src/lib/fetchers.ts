import { LoginInfo, SignupInfo } from "./types";

const signupWithEmailAndPassword = async (info: SignupInfo) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
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
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!res.ok) {
        let errMsg: string;
        errMsg = (await res.json()).message;
        if (!errMsg) {
            errMsg = res.statusText;
        } else if (!errMsg) {
            errMsg = "Failed to Create New Property";
        }

        throw new Error(errMsg);
        return;
    }

    return res.json();
};

const getProperties = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`
        );

        if (!res.ok) {
            let errMsg: string;
            errMsg = (await res.json()).message;
            if (!errMsg) {
                errMsg = res.statusText;
            } else if (!errMsg) {
                errMsg = "Failed to Fetch Properties Data";
            }

            throw new Error(errMsg);
            return;
        }

        return res.json();
    } catch (error) {
        let errMsg: string;
        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Failed to Fetch Properties Data";
        }

        throw new Error(errMsg);
    }
};

const getLatestProperties = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties/latest`,
            {
                next: { tags: ["latest"] },
            }
        );

        if (!res.ok) {
            let errMsg: string;
            errMsg = (await res.json()).message;
            if (!errMsg) {
                errMsg = res.statusText;
            } else if (!errMsg) {
                errMsg = "Failed to Fetch Latest Properties Data";
            }

            throw new Error(errMsg);
            return;
        }

        return res.json();
    } catch (error) {
        let errMsg: string;
        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Failed to Fetch latest Properties Data";
        }

        throw new Error(errMsg);
    }
};

const getPopularProperties = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties/popular`,
            {
                next: { revalidate: 60 * 60 * 24 * 7 },
            }
        );

        if (!res.ok) {
            let errMsg: string;
            errMsg = (await res.json()).message;
            if (!errMsg) {
                errMsg = res.statusText;
            } else if (!errMsg) {
                errMsg = "Failed to Fetch popular Properties Data";
            }

            throw new Error(errMsg);
            return;
        }

        return res.json();
    } catch (error) {
        let errMsg: string;
        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Failed to Fetch popular Properties Data";
        }

        throw new Error(errMsg);
    }
};

const updateViewCount = async (slug: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties/popular`,
            {
                method: "POST",
                body: JSON.stringify({ slug }),
                headers: { "content-type": "application/json" },
            }
        );

        if (!res.ok) {
            let errMsg: string;
            errMsg = (await res.json()).message;
            if (!errMsg) {
                errMsg = res.statusText;
            } else if (!errMsg) {
                errMsg = "Failed to Update View Count";
            }

            throw new Error(errMsg);
            return;
        }

        return res.json();
    } catch (error) {
        let errMsg: string;
        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Failed to Update View Count";
        }

        throw new Error(errMsg);
    }
};

const getPropertyDetails = async (slug: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties/${slug}`
        );

        if (!res.ok) {
            let errMsg: string;
            errMsg = (await res.json()).message;
            if (!errMsg) {
                errMsg = res.statusText;
            } else if (!errMsg) {
                errMsg = "Failed to Fetch Latest Properties Data";
            }

            throw new Error(errMsg);
            return;
        }

        return res.json();
    } catch (error) {
        let errMsg: string;
        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Failed to Fetch latest Properties Data";
        }

        throw new Error(errMsg);
    }
};

export {
    signupWithEmailAndPassword,
    loginWithEmailAndPassword,
    createNewProperty,
    getProperties,
    getLatestProperties,
    getPropertyDetails,
    getPopularProperties,
    updateViewCount,
};
