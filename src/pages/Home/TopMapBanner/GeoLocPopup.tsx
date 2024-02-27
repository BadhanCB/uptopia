import { LatLngExpression } from "leaflet";
import Image, { StaticImageData } from "next/image";
import { TbCarGarage, TbCurrencyTaka } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { LuBath } from "react-icons/lu";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoBedOutline } from "react-icons/io5";
import { Popup } from "react-leaflet";

type Props = {
    property: {
        img: StaticImageData | string;
        title: string;
        price: number;
        geoLocation: LatLngExpression;
        type: string;
    };
};

const GeoLocPopup = ({ property: { img, title, price } }: Props) => {
    return (
        <Popup>
            <div className="flex gap-3">
                <div className="h-40 w-32 rounded overflow-hidden">
                    <Image
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                        quality={25}
                        placeholder="blur"
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
                    <Button variant="outline">View Details</Button>
                </div>
            </div>
        </Popup>
    );
};

export default GeoLocPopup;
