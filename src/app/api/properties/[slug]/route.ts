import connectMongoClient from "@/lib/mongodb";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (
    rquuest: NextRequest,
    { params }: { params: { slug: string } }
) => {
    try {
        const client = await connectMongoClient();
        const propertiesCollection = client
            .db("uptopia")
            .collection("properties");

        const propertyDetails = await propertiesCollection.findOne({
            slug: params.slug,
        });

        if (!propertyDetails) {
            return NextResponse.json(
                { message: "Property not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(propertyDetails, { status: 200 });
    } catch (error) {
        let errMsg: string;
        if (error instanceof Error) {
            errMsg = error.message;
        } else {
            errMsg = "Internal Server Error";
        }
        return NextResponse.json({ message: errMsg }, { status: 500 });
    }
};
