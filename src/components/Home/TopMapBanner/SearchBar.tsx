"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const SearchBar = () => {
    const [priceRange, setPriceRange] = useState(35000);

    return (
        <Card className="absolute z-20 left-1/2 bottom-0 -translate-x-1/2 md:translate-y-1/4 lg:translate-y-1/2 border-none shadow-xl">
            <CardContent className="pt-6 flex flex-wrap justify-evenly gap-6 w-max max-w-[95vw]">
                <Select>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Looking For</SelectLabel>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="rent">For Rent</SelectItem>
                            <SelectItem value="sale">For Sale</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[200px]">
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
                <Select>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select Preferred City" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="dhaka">Dhaka</SelectItem>
                            <SelectItem value="rangpur">Rangpur</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <div className="w-[200px]">
                    <div className="w-full flex justify-between items-center">
                        <p>Price:</p> <p>{priceRange}</p>
                    </div>
                    <Slider
                        defaultValue={[priceRange]}
                        min={5000}
                        max={100000}
                        step={1000}
                        onValueChange={(values) => setPriceRange(values[0])}
                    />
                </div>
                <Button>Search</Button>
            </CardContent>
        </Card>
    );
};

export default SearchBar;
