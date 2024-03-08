import type { NextRequest } from "next/server";
import authMiddleware from "./middlewares/authMiddleware";
import corsMiddleware from "./middlewares/corsMiddleware";

export const middleware = async (request: NextRequest) => {
    await authMiddleware(request);
    await corsMiddleware(request);
};

export const config = {
    matcher: ["/dashboard/:path*", "/api/:path*"],
};
