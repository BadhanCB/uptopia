import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { BsGeoAlt } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TbCarGarage, TbCurrencyTaka } from "react-icons/tb";
import { TfiRulerAlt2 } from "react-icons/tfi";
import placeholder from "@/assets/img/placeholder.svg";
import { MdAttachFile } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { Button } from "@/components/ui/button";

type Props = {
    property: {
        img: StaticImageData;
        title: string;
        price: number;
        location: string;
        description: string;
        numberOfBedRoom: number;
        numberOfBathRoom: number;
        numberOfGarage: number;
        totalArea: number;
    };
};

const MostViewedPropertyCard = ({
    property: {
        img,
        title,
        price,
        location,
        description,
        numberOfBedRoom,
        numberOfBathRoom,
        numberOfGarage,
        totalArea,
    },
}: Props) => {
    return (
        <Card className="grid grid-cols-1 md:grid-cols-2 overflow-hidden text-start border-none rounded-none group">
            <div className="h-56 md:h-full w-full overflow-hidden relative md:group-even:order-2 md:group-odd:order-1">
                <Image
                    placeholder="blur"
                    src={img}
                    alt={title}
                    fill
                    sizes="392px"
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
                    <p className="flex items-center gap-0.5 text-slate-800 font-medium">
                        <BsGeoAlt className="text-lg" />
                        {location}
                    </p>
                </CardHeader>
                <CardContent>
                    <CardDescription className="mb-8">
                        {description}
                    </CardDescription>
                    <div className="flex flex-wrap justify-between gap-2">
                        <p className="flex gap-1 items-center">
                            <IoBedOutline className="text-xl" />{" "}
                            {numberOfBedRoom}
                        </p>
                        <p className="flex gap-1 items-center">
                            <LuBath className="text-xl" /> {numberOfBathRoom}
                        </p>
                        <p className="flex gap-1 items-center">
                            <TbCarGarage className="text-xl" /> {numberOfGarage}
                        </p>
                        <p className="flex gap-1 items-center">
                            <TfiRulerAlt2 className="text-xl" /> {totalArea}
                        </p>
                    </div>
                    <Button variant="outline" className="mt-8">
                        <GrOverview className="mr-2 h-4 w-4" /> View In Details
                    </Button>
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
                        <p>Mark Anderson</p>
                    </div>
                    <p className="flex gap-0.5 items-center">
                        <MdAttachFile className="text-base" /> 25 Feb 2024
                    </p>
                </CardFooter>
            </div>
        </Card>
    );
};

export default MostViewedPropertyCard;
