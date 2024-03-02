import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
    try {
        let cookie = request.cookies.get("token")?.value;

        if (!cookie || !cookie.startsWith("Bearer")) {
            throw new Error("Invalid token");
        }
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(cookie.split(" ")[1], secret);

        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
};

export const config = {
    matcher: "/dashboard/:path*",
};
