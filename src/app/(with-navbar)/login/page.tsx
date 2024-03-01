import LoginForm from "@/components/Login/LoginForm";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return (
        <main className="wrapper py-4 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-82px)]">
            <div className="relative h-64 md:h-full">
                <Image
                    src="/login.svg"
                    alt="login image"
                    fill
                    className="h-full w-full object-contain"
                    sizes="(max-width: 768px) 370px, (max-width: 1280px) 400px, 320px"
                />
            </div>
            <div className="place-self-center">
                <h1 className="text-3xl text-center">Login</h1>
                <LoginForm />
                <p>
                    {`Don't have any Account? `}
                    <Link href="/signup" className="text-indigo-600">
                        Signup
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Login;
