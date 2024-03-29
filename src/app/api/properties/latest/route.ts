import connectMongoClient from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const client = await connectMongoClient();
        const propertiesCollection = client
            .db("uptopia")
            .collection("properties");
        const cursor = propertiesCollection
            .find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .project({
                imageUrl: 1,
                title: 1,
                price: 1,
                propertySize: 1,
                bedrooms: 1,
                bathrooms: 1,
                garages: 1,
                address: 1,
                status: 1,
                propertyType: 1,
                slug: 1,
                realtor: 1,
                createdAt: 1,
            });

        const properties = await cursor.toArray();

        if (!properties.length) {
            return NextResponse.json(
                { message: "Properties not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(properties, { status: 200 });
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
