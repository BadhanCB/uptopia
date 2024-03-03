import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const DetailsInfoInputFields = () => {
    return (
        <div>
            <h3 className="mb-2 text-gray-500">Details Information</h3>
            <div className="flex flex-wrap gap-6 items-center">
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="price">Price(BD)</Label>
                    <Input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price in Bangladesh Currency Unit"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="propertySize">
                        Property Size(ft<sup>2</sup>)
                    </Label>
                    <Input
                        type="number"
                        id="propertySize"
                        name="propertySize"
                        placeholder="Property size in square feet"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="bedrooms">Bed Rooms</Label>
                    <Input
                        type="number"
                        id="bedrooms"
                        name="bedrooms"
                        placeholder="Total number of bedrooms"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="bathrooms">Bath Rooms</Label>
                    <Input
                        type="number"
                        id="bathrooms"
                        name="bathrooms"
                        placeholder="Total number of bathrooms"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="garages">Garages</Label>
                    <Input
                        type="number"
                        id="garages"
                        name="garages"
                        placeholder="Total number/unit of alocated/constructed garages"
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailsInfoInputFields;
