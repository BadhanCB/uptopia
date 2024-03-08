import React from "react";
import { Separator } from "../ui/separator";

type Props = {
    description: string;
};

const DescriptionCard = ({ description }: Props) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-md">
            <h3>Description</h3>
            <Separator className="my-3" />
            <p>{description}</p>
        </div>
    );
};

export default DescriptionCard;
