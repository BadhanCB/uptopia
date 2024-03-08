import { jwtVerify } from "jose";
import { NextResponse, type NextRequest } from "next/server";

const authMiddleware = async (request: NextRequest) => {
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

export default authMiddleware;
