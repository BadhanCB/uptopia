"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";
import { loginWithEmailAndPassword } from "@/lib/fetchers";
import { FiLoader } from "react-icons/fi";
import { LoginResponse } from "@/lib/types";
import useAuth from "@/hooks/useAuth";

const LoginForm = () => {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useAuth();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const form = e.target as HTMLFormElement & {
                email: { value: string };
                password: { value: string };
            };

            const userInfo = {
                email: form.email.value,
                password: form.password.value,
            };

            const resData: LoginResponse = await loginWithEmailAndPassword(
                userInfo
            );

            toast({ description: resData.message });
            setIsLoading(false);
            setUser(resData.data);
            router.replace("/");
        } catch (error) {
            let errMsg;

            if (error instanceof Error) {
                errMsg = error.message;
            } else {
                errMsg = "Failed to Signup";
            }

            toast({ description: errMsg, variant: "destructive" });
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 my-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                />
            </div>
            <Button disabled={isLoading} type="submit">
                {isLoading && <FiLoader className="animate-spin" />} Submit
            </Button>
        </form>
    );
};

export default LoginForm;
