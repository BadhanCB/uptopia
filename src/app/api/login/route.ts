import connectMongoClient from "@/lib/mongodb";
import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
    try {
        const { email, password } = await request.json();
        const client = await connectMongoClient();
        const userCollection = client.db("uptopia").collection("users");
        const userData = await userCollection.findOne({ email: email });

        if (!userData) {
            return NextResponse.json(
                { message: "User not Found" },
                { status: 404 }
            );
        }

        const matched = await bcrypt.compare(password, userData.password);

        if (!matched) {
            return NextResponse.json(
                { message: "Password not Matched" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                message: "Login Successfull",
                data: { name: userData.name, email: userData.email },
            },
            { status: 200 }
        );
    } catch (error) {
        let errMsg;

        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Internal Server Error";
        }

        console.log(error);

        return NextResponse.json({ message: errMsg }, { status: 500 });
    }
};
