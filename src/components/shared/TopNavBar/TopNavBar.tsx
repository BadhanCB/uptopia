import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.svg";
import { Button } from "@/components/ui/button";
import { LuLogIn } from "react-icons/lu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    className: string;
};

const TopNavBar = ({ className }: Props) => {
    return (
        <header className={`w-full z-50 ${className}`}>
            <nav className="wrapper py-4">
                <ul className="flex justify-between items-center">
                    <div>
                        <li>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-2xl"
                            >
                                <Image
                                    src={logo}
                                    alt="Brand Logo"
                                    height={50}
                                    width={50}
                                />
                                <h1>Uptopia</h1>
                            </Link>
                        </li>
                    </div>
                    <div className="flex-1 hidden md:flex gap-8 justify-center items-center uppercase">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/properties">Properties</Link>
                        </li>
                        <li>
                            <Link href="/realtor">Realtor</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </div>
                    <div className="flex gap-6 justify-end items-center">
                        <li>
                            <TooltipProvider>
                                <Tooltip delayDuration={1}>
                                    <TooltipTrigger>
                                        <Link href="/login">
                                            <LuLogIn className="text-2xl" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-gray-900 text-gray-50">
                                        Login
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default TopNavBar;
