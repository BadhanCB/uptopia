import cloudinary from "@/lib/configs/cloudinary.config";
import connectMongoClient from "@/lib/mongodb";
import { slugify } from "@/lib/utils";
import { existsSync } from "fs";
import { mkdir, unlink, writeFile } from "fs/promises";
import { jwtVerify } from "jose";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { extname } from "path";

export const GET = async (request: NextRequest) => {
    try {
        const searctParams = request.nextUrl.searchParams;
        const status = searctParams.get("status");
        const type = searctParams.get("type");
        const city = searctParams.get("city");
        const price = searctParams.get("price");

        let filter = {};
        if (status) {
            filter = { ...filter, status };
        }
        if (type) {
            filter = { ...filter, propertyType: type };
        }
        if (city) {
            filter = { ...filter, city };
        }
        if (price && price !== "0") {
            filter = { ...filter, price: { $lte: parseInt(price) } };
        }

        const client = await connectMongoClient();
        const propertiesCollection = client
            .db("uptopia")
            .collection("properties");

        const cursor = propertiesCollection.find(filter).project({
            imageUrl: 1,
            title: 1,
            price: 1,
            propertySize: 1,
            bedrooms: 1,
            bathrooms: 1,
            garages: 1,
            address: 1,
            geolocation: 1,
            status: 1,
            propertyType: 1,
            slug: 1,
            realtor: 1,
            createdAt: 1,
        });
        const result = await cursor.toArray();

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
};

export const POST = async (request: NextRequest) => {
    try {
        const cookie = cookies().get("token")?.value;
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        if (!cookie || !secret) {
            return NextResponse.json(
                { message: "Unauthorized Access" },
                { status: 400 }
            );
        }

        const { payload } = await jwtVerify(cookie.split(" ")[1], secret);
        const { name, email } = payload;

        if (!name || !email) {
            return NextResponse.json(
                { message: "Unauthorized Access" },
                { status: 400 }
            );
        }

        const formData = await request.formData();
        const client = await connectMongoClient();
        const propertiesCollection = client
            .db("uptopia")
            .collection("properties");

        if (!formData) {
            return NextResponse.json(
                { message: "Form Data not found" },
                { status: 404 }
            );
        }

        const image = formData.get("image") as unknown as File;
        const title = formData.get("title")?.toString();
        const description = formData.get("description")?.toString();
        const price = parseFloat(formData.get("price")?.toString() || "");
        const propertySize = parseFloat(
            formData.get("propertySize")?.toString() || ""
        );
        const bedrooms = parseInt(formData.get("bedrooms")?.toString() || "");
        const bathrooms = parseInt(formData.get("bathrooms")?.toString() || "");
        const garages = parseInt(formData.get("garages")?.toString() || "");
        const address = formData.get("address")?.toString();
        const city = formData.get("city")?.toString()?.toLowerCase();
        const division = formData.get("division")?.toString()?.toLowerCase();
        const zip = parseInt(formData.get("zip")?.toString() || "");
        const country = formData.get("country")?.toString()?.toLowerCase();
        const latitude = parseFloat(formData.get("latitude")?.toString() || "");
        const longitude = parseFloat(
            formData.get("longitude")?.toString() || ""
        );
        const status = formData.get("status")?.toString().toLowerCase();
        const propertyType = formData
            .get("propertyType")
            ?.toString()
            ?.toLowerCase();

        if (
            !image ||
            !title ||
            !description ||
            !price ||
            !propertySize ||
            !bedrooms ||
            !bathrooms ||
            !garages ||
            !address ||
            !city ||
            !division ||
            !zip ||
            !country ||
            !latitude ||
            !longitude ||
            !status ||
            !propertyType
        ) {
            return NextResponse.json(
                { message: "Some information Missing" },
                { status: 400 }
            );
        }

        const bytesImage = await image.arrayBuffer();
        const bufferImage = Buffer.from(bytesImage);
        const fileExt = extname(image.name);
        const fileName =
            image.name.replace(fileExt, "").toLowerCase().split(" ").join("-") +
            "-" +
            Date.now() +
            fileExt;

        if (!existsSync("/tmp")) {
            await mkdir("/tmp");
        }
        const path = `/tmp/${fileName}`;
        await writeFile(path, bufferImage);

        const result = await cloudinary.uploader.upload(path, {
            width: 320,
            fetch_format: "auto",
            use_filename: true,
        });

        await unlink(path);

        const imageUrl = result.secure_url;

        const newProperty = {
            imageUrl,
            title,
            description,
            price,
            propertySize,
            bedrooms,
            bathrooms,
            garages,
            address,
            city,
            division,
            zip,
            country,
            status,
            propertyType,
            geolocation: [latitude, longitude],
            slug: slugify(title),
            realtor: {
                name,
                email,
            },
            viewCount: 0,
            isFeatured: false,
            createdAt: new Date(),
        };

        const mongoResult = await propertiesCollection.insertOne(newProperty);

        if (!mongoResult.acknowledged) {
            return NextResponse.json(
                { message: "Failed to Create new Property" },
                { status: 500 }
            );
        }

        revalidateTag("latest");

        return NextResponse.json(
            { message: "New Property Listing Created" },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
};
