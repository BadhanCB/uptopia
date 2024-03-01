import connectMongoClient from "@/lib/mongodb";
import { type NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Provide all the Information" },
                { status: 406 }
            );
        }

        const client = await connectMongoClient();
        const userCollection = client.db("uptopia").collection("users");

        if (!process.env.BCRYPT_SALT) {
            return NextResponse.json(
                { message: "Bcrypt Salt not found" },
                { status: 500 }
            );
        }

        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT));
        const hashedPass = await bcrypt.hash(password, salt);

        const mongoRes = await userCollection.insertOne({
            name,
            email,
            password: hashedPass,
        });

        if (!mongoRes.acknowledged) {
            return NextResponse.json(
                { message: "Internal Server Error" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message:
                    "Successfully create new Account. Now you can Login as User",
            },
            { status: 201 }
        );
    } catch (error) {
        let errMsg;

        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Internal Server Error";
        }

        return NextResponse.json({ message: errMsg }, { status: 500 });
    }
};
