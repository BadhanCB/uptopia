export type LoginInfo = {
    email: string;
    password: string;
};

export type LoginResponse = {
    data: {
        email: string;
        name: string;
    };

    message: string;
};

export type SignupInfo = LoginInfo & {
    name: string;
};

export type User = {
    name?: string;
    email?: string;
};
