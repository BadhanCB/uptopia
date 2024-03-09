import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { BsGeoAlt } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TbCarGarage, TbCurrencyTaka } from "react-icons/tb";
import { TfiRulerAlt2 } from "react-icons/tfi";
import placeholder from "@/assets/img/placeholder.svg";
import { MdAttachFile } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { PopularProperty } from "@/lib/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type Props = {
    property: PopularProperty;
};

const MostViewedPropertyCard = ({
    property: {
        imageUrl,
        title,
        price,
        description,
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
    },
}: Props) => {
    return (
        <Card className="grid grid-cols-1 md:grid-cols-2 overflow-hidden text-start border-none rounded-none group">
            <div className="h-56 md:h-full w-full overflow-hidden relative md:group-even:order-2 md:group-odd:order-1">
                <Image
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,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"
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 212px, (min-width: 1024px) 320px, 106px"
                    className="object-cover object-center"
                />
            </div>
            <div className="md:group-even:order-1 md:group-odd:order-2">
                <CardHeader>
                    <CardTitle className="capitalize">{title}</CardTitle>
                    <p className="flex items-center gap-0.5 text-indigo-600 font-medium">
                        <TbCurrencyTaka className="text-xl" />
                        {price}
                    </p>
                    <div className="flex gap-3">
                        <Badge className="rounded bg-indigo-500">
                            {propertyType}
                        </Badge>
                        <Badge className="rounded bg-lime-500">{status}</Badge>
                    </div>
                    <p className="flex items-center gap-0.5 text-slate-800 font-medium">
                        <BsGeoAlt className="text-lg min-w-max" />
                        {address}
                    </p>
                </CardHeader>
                <CardContent>
                    <CardDescription className="mb-6">
                        {description}
                    </CardDescription>
                    <div className="flex flex-wrap justify-between gap-2">
                        <p className="flex gap-1 items-center">
                            <IoBedOutline className="text-xl" /> {bedrooms}
                        </p>
                        <p className="flex gap-1 items-center">
                            <LuBath className="text-xl" /> {bathrooms}
                        </p>
                        <p className="flex gap-1 items-center">
                            <TbCarGarage className="text-xl" /> {garages}
                        </p>
                        <p className="flex gap-1 items-center">
                            <TfiRulerAlt2 className="text-xl" /> {propertySize}
                        </p>
                    </div>
                    <Link
                        href={`/properties/${slug}`}
                        className="mt-8 flex items-center hover:text-indigo-500"
                    >
                        <GrOverview className="mr-2 h-4 w-4" /> View In Details
                    </Link>
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
            </div>
        </Card>
    );
};

export default MostViewedPropertyCard;
