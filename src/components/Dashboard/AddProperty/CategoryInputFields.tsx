import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

type Props = {
    status: string;
    setStatus: Dispatch<SetStateAction<string>>;
    propertyType: string;
    setPropertyType: Dispatch<SetStateAction<string>>;
};

const CategoryInputFields = ({
    status,
    setStatus,
    propertyType,
    setPropertyType,
}: Props) => {
    return (
        <div>
            <h3 className="mb-2 text-gray-500">Select Categories</h3>
            <div className="flex flex-wrap gap-6">
                <Select
                    defaultValue={status}
                    onValueChange={(value) => setStatus(value)}
                >
                    <SelectTrigger className="w-full max-w-sm">
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Listed For</SelectLabel>
                            <SelectItem value="rentals">Rentals</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select
                    defaultValue={propertyType}
                    onValueChange={(value) => setPropertyType(value)}
                >
                    <SelectTrigger className="w-full max-w-sm">
                        <SelectValue placeholder="Select Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Residential</SelectLabel>
                            <SelectItem value="sigle-family">
                                Single Family House
                            </SelectItem>
                            <SelectItem value="multi-family">
                                Multi Family House
                            </SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Commertial</SelectLabel>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="office">Office</SelectItem>
                            <SelectItem value="shop">Shop</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default CategoryInputFields;
