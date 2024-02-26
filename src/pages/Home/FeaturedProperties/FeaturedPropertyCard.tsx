import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { TbCarGarage, TbCurrencyTaka } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TfiRulerAlt2 } from "react-icons/tfi";

type Props = {
    property: {
        img: StaticImageData;
        title: string;
        price: number;
        description: string;
        numberOfBedRoom: number;
        numberOfBathRoom: number;
        numberOfGarage: number;
        totalArea: number;
    };
};

const FeaturedPropertyCard = ({
    property: {
        img,
        title,
        price,
        description,
        numberOfBedRoom,
        numberOfBathRoom,
        numberOfGarage,
        totalArea,
    },
}: Props) => {
    return (
        <Card className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden text-start">
            <div className="h-56 lg:h-full w-full overflow-hidden relative">
                <Image
                    placeholder="blur"
                    src={img}
                    alt={title}
                    fill
                    sizes="392px"
                    className="object-cover"
                />
            </div>
            <div>
                <CardHeader>
                    <CardTitle className="capitalize">{title}</CardTitle>
                    <p className="flex items-center gap-0.5 text-indigo-600 font-medium">
                        <TbCurrencyTaka className="text-xl" />
                        {price}
                    </p>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between flex-wrap gap-2">
                    <p className="flex gap-1 items-center">
                        <IoBedOutline className="text-xl" /> {numberOfBedRoom}
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
                </CardFooter>
            </div>
        </Card>
    );
};

export default FeaturedPropertyCard;
