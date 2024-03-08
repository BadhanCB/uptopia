import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TbCarGarage } from "react-icons/tb";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { Separator } from "../ui/separator";

type Props = {
    bedrooms: number;
    bathrooms: number;
    garages: number;
    propertySize: number;
};

const DetailsOverview = ({
    bedrooms,
    bathrooms,
    garages,
    propertySize,
}: Props) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-md">
            <h3>Overview</h3>
            <Separator className="my-3" />
            <div className="flex flex-wrap gap-4 text-xl justify-between items-center">
                <div>
                    <p className="flex gap-1 items-center justify-center">
                        <IoBedOutline className="text-gray-400" /> {bedrooms}
                    </p>
                    <p className="text-sm text-gray-400 text-center">
                        Bedrooms
                    </p>
                </div>
                <div>
                    <p className="flex gap-1 items-center justify-center">
                        <LuBath className="text-gray-400" /> {bathrooms}
                    </p>
                    <p className="text-sm text-gray-400 text-center">
                        Bathrooms
                    </p>
                </div>
                <div>
                    <p className="flex gap-1 items-center justify-center">
                        <TbCarGarage className="text-gray-400" /> {garages}
                    </p>
                    <p className="text-sm text-gray-400 text-center">Garages</p>
                </div>
                <div>
                    <p className="flex gap-1 items-center justify-center">
                        <TfiRulerAlt2 className="text-gray-400" />{" "}
                        {propertySize}
                    </p>
                    <p className="text-sm text-gray-400 text-center">Sq Ft</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsOverview;
