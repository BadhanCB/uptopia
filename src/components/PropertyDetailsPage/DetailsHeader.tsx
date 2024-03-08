import { SlLocationPin } from "react-icons/sl";
import { Badge } from "../ui/badge";
import { TbCurrencyTaka } from "react-icons/tb";

type Props = {
    title: string;
    price: number;
    address: string;
    propertyType: string;
    status: string;
};

const DetailsHeader = ({
    title,
    price,
    address,
    propertyType,
    status,
}: Props) => {
    return (
        <section className="flex flex-wrap gap-4 justify-between">
            <div className="grid gap-3">
                <h1 className="text-3xl tracking-wider capitalize">{title}</h1>
                <div className="flex gap-2 uppercase">
                    <Badge className="rounded bg-indigo-500">
                        {propertyType}
                    </Badge>
                    <Badge className="rounded bg-lime-500">{status}</Badge>
                </div>
                <p className="flex gap-1.5 items-center text-xl text-gray-500">
                    <SlLocationPin /> {address}
                </p>
            </div>
            <div>
                <h2 className="flex gap-0.5 text-2xl items-center font-semibold">
                    <TbCurrencyTaka />
                    {price} taka{" "}
                    <small className="text-gray-400">
                        {status === "rentals" && "/month"}
                    </small>
                </h2>
            </div>
        </section>
    );
};

export default DetailsHeader;
