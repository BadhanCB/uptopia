import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { TbCarGarage, TbCurrencyTaka } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TfiRulerAlt2 } from "react-icons/tfi";
import placeholder from "@/assets/img/placeholder.svg";
import { MdAttachFile } from "react-icons/md";
import { Property } from "@/lib/types";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type Props = {
    property: Property;
};

const PropertyCard = ({ property }: Props) => {
    const {
        title,
        price,
        imageUrl,
        address,
        bedrooms,
        bathrooms,
        garages,
        propertySize,
        propertyType,
        status,
        realtor: { name },
        createdAt,
        slug,
    } = property;

    return (
        <Link href={`/properties/${slug}`}>
            <Card className="text-start cursor-pointer hover:scale-105 hover:shadow hover:-translate-y-1 transition duration-300">
                <AspectRatio ratio={4 / 3} className="overflow-hidden relative">
                    <Image
                        src={imageUrl}
                        alt="property image"
                        fill
                        sizes="(min-width: 768px) 212px, (min-width: 1024px) 320px, 106px"
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,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"
                        className="object-cover rounded h-full w-full"
                    />
                    <div className="absolute w-full flex items-center justify-between p-2 uppercase">
                        <Badge className="bg-indigo-500 rounded">
                            {propertyType}
                        </Badge>
                        <Badge className="bg-lime-500 rounded">{status}</Badge>
                    </div>
                </AspectRatio>
                <CardHeader className="py-3">
                    <CardTitle className="text-xl">
                        {title.length > 25 ? title.slice(0, 25) + "..." : title}
                    </CardTitle>
                    <p className="text-lg text-sky-600 flex items-center font-medium">
                        <TbCurrencyTaka className="text-xl" /> {price}
                    </p>
                </CardHeader>
                <CardContent className="pb-3">
                    <CardDescription className="flex gap-1 items-center">
                        <FiMapPin className="min-w-max" /> {address}
                    </CardDescription>
                    <div className="flex flex-wrap items-center justify-between mt-3">
                        <p className="flex gap-1 items-center">
                            <IoBedOutline className="xl:text-lg" /> {bedrooms}
                        </p>
                        <p className="flex gap-1 items-center">
                            <LuBath className="xl:text-lg" /> {bathrooms}
                        </p>
                        <p className="flex gap-1 items-center">
                            <TbCarGarage className="xl:text-lg" /> {garages}
                        </p>
                        <p className="flex gap-1 items-center">
                            <TfiRulerAlt2 className="xl:text-lg" />{" "}
                            {propertySize}
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="text-sm flex-wrap gap-2 justify-between border-t pt-2 text-gray-500">
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-6 rounded-full overflow-hidden relative">
                            <Image
                                src={placeholder}
                                alt="agent"
                                quality={50}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <p>{name}</p>
                    </div>

                    <p className="flex gap-0.5 items-center">
                        <MdAttachFile className="text-base" />{" "}
                        {new Date(createdAt).toLocaleDateString("en-BD", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                    </p>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default PropertyCard;
