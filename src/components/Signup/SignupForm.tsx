"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { signupWithEmailAndPassword } from "@/lib/fetchers";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

const SignupForm = () => {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const form = e.target as HTMLFormElement & {
                name: { value: string };
                email: { value: string };
                password: { value: string };
            };

            const userInfo = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            };

            const resData = await signupWithEmailAndPassword(userInfo);
            toast({ description: resData.message });
            setIsLoading(false);
            router.replace("/login");
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
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Deo"
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
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
                {isLoading && <FiLoader className="animate-spin" />} Create
            </Button>
        </form>
    );
};

export default SignupForm;
