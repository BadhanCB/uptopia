"use client";
import { LatLngExpression } from "leaflet";
import Image, { StaticImageData } from "next/image";
import { TbCarGarage, TbCurrencyTaka } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { LuBath } from "react-icons/lu";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoBedOutline } from "react-icons/io5";
import { Popup } from "react-leaflet";
import { GeoLocatedProperty } from "@/lib/types";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

type Props = {
    property: GeoLocatedProperty;
};

const GeoLocPopup = ({ property: { imageUrl, title, price, slug } }: Props) => {
    return (
        <Popup>
            <div className="flex gap-3">
                <div className="h-32 w-44 min-w-max rounded overflow-hidden relative">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(min-width: 768px) 212px, (min-width: 1024px) 320px, 106px"
                        className="h-full w-full object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,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"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold w-max">{title}</h3>
                    <p
                        style={{ margin: 0 }}
                        className="flex items-center text-base text-indigo-500"
                    >
                        <TbCurrencyTaka />
                        {price}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="flex gap-1 items-center">
                            <IoBedOutline /> 5
                        </p>
                        <p className="flex gap-1 items-center">
                            <LuBath /> 2
                        </p>
                        <p className="flex gap-1 items-center">
                            <TbCarGarage /> 1
                        </p>
                        <p className="flex gap-1 items-center">
                            <TfiRulerAlt2 /> 17,00
                        </p>
                    </div>
                    <Link
                        href={`/properties/${slug}`}
                        className="hover:text-indigo-500 text-gray-800 flex gap-1 items-center"
                    >
                        <FiBookOpen />
                        View Details
                    </Link>
                </div>
            </div>
        </Popup>
    );
};

export default GeoLocPopup;
