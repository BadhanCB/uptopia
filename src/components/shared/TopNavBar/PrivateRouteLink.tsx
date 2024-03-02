"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

const PrivateRouteLink = () => {
    const { user } = useAuth();

    return (
        <>
            {user.email && (
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
            )}
        </>
    );
};

export default PrivateRouteLink;
