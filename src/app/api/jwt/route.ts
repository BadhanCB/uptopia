import { NextResponse, type NextRequest } from "next/server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const GET = async () => {
    const cookie = cookies().get("token")?.value;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    if (!cookie || !secret) {
        return NextResponse.json(
            { message: "Authentication Failed" },
            { status: 400 }
        );
    }

    const { payload } = await jwtVerify(cookie.split(" ")[1], secret);
    const { name, email } = payload;

    if (!name || !email) {
        return NextResponse.json(
            { message: "Authentication Failed" },
            { status: 400 }
        );
    }

    return NextResponse.json({ name, email });
};

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";

    const jwt = await new SignJWT(body)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .sign(secret);

    cookies().set({
        name: "token",
        value: `Bearer ${jwt}`,
        secure: true,
        httpOnly: true,
    });

    return NextResponse.json({ message: "Token Created" });
};
