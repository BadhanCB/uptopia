import SignupForm from "@/components/Signup/SignupForm";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
    return (
        <main className="wrapper py-4 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-82px)]">
            <div className="place-self-center">
                <h1 className="text-3xl text-center">Signup</h1>
                <SignupForm />
                <p>
                    Already have an Account?
                    <Link href="/login" className="text-indigo-600">
                        Login
                    </Link>
                </p>
            </div>
            <div className="relative h-64 md:h-full order-1 md:order-2">
                <Image
                    src="/signup.svg"
                    alt="login image"
                    fill
                    className="h-full w-full object-contain"
                    sizes="(max-width: 768px) 370px, (max-width: 1280px) 400px, 320px"
                />
            </div>
        </main>
    );
};

export default SignUp;
