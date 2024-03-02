"use client";
import { LuLogIn } from "react-icons/lu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { IoPersonCircleOutline } from "react-icons/io5";

const AuthOptions = () => {
    const { user } = useAuth();
    return (
        <div className="flex gap-6 justify-end items-center">
            {user.email ? (
                <li>
                    <Popover>
                        <PopoverTrigger>
                            <IoPersonCircleOutline className="text-2xl" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <h3 className="text-xl">{user.name}</h3>
                            <p>
                                <span className="text-gray-400">Email: </span>
                                {user.email}
                            </p>
                        </PopoverContent>
                    </Popover>
                </li>
            ) : (
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
            )}
        </div>
    );
};

export default AuthOptions;
