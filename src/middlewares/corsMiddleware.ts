import { NextResponse, type NextRequest } from "next/server";

const corsMiddleware = async (request: NextRequest) => {
    const nextRes = NextResponse.next();

    if (request.nextUrl.pathname.startsWith("/api")) {
        nextRes.headers.append("Access-Control-Allow-Credentials", "true");
        nextRes.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
        nextRes.headers.append(
            "Access-Control-Allow-Methods",
            "GET,DELETE,PATCH,POST,PUT"
        );
        nextRes.headers.append(
            "Access-Control-Allow-Headers",
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
        );
    }

    return nextRes;
};

export default corsMiddleware;
