import type { NextRequest } from "next/server";
import { SignJWT } from "jose";

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";

    const jwt = await new SignJWT(body)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .sign(secret);
};
