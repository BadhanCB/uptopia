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
import house from "@/assets/img/house.jpg";
import placeholder from "@/assets/img/placeholder.svg";
import { MdAttachFile } from "react-icons/md";

type Props = {};

const PropertyCard = (props: Props) => {
    return (
        <Card className="text-start">
            <AspectRatio ratio={4 / 3} className="overflow-hidden">
                <Image
                    placeholder="blur"
                    src={house}
                    alt="property image"
                    className="object-cover rounded h-full w-full"
                />
            </AspectRatio>
            <CardHeader className="py-3">
                <CardTitle className="text-xl">Apartment in New York</CardTitle>
                <p className="text-lg text-sky-600 flex items-center font-medium">
                    <TbCurrencyTaka className="text-xl" /> 10,00,000
                </p>
            </CardHeader>
            <CardContent className="pb-3">
                <CardDescription>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Beatae aliquid incidunt similique nemo explicabo...
                </CardDescription>
                <div className="flex flex-wrap items-center justify-between mt-3">
                    <p className="flex gap-1 items-center">
                        <IoBedOutline className="text-xl" /> 5
                    </p>
                    <p className="flex gap-1 items-center">
                        <LuBath className="text-xl" /> 2
                    </p>
                    <p className="flex gap-1 items-center">
                        <TbCarGarage className="text-xl" /> 1
                    </p>
                    <p className="flex gap-1 items-center">
                        <TfiRulerAlt2 className="text-xl" /> 17,00
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
                    <p>Mark Anderson</p>
                </div>
                <p className="flex gap-0.5 items-center">
                    <MdAttachFile className="text-base" /> 25 Feb 2024
                </p>
            </CardFooter>
        </Card>
    );
};

export default PropertyCard;
