"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

const FilterOptions = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [propertystatus, setPropertyStatus] = useState(
        searchParams.get("status") || ""
    );
    const [propertytype, setPropertyType] = useState(
        searchParams.get("type") || ""
    );
    const [preferedcity, setPreferedCity] = useState(
        searchParams.get("city") || ""
    );
    const [priceRange, setPriceRange] = useState(
        parseInt(searchParams.get("price") || "0")
    );

    useEffect(() => {
        const url = `/properties?status=${propertystatus}&type=${propertytype}&city=${preferedcity}&price=${priceRange}`;
        router.replace(url, { scroll: false });
    }, [propertystatus, propertytype, preferedcity, priceRange, router]);

    useEffect(() => {
        setPropertyStatus(searchParams.get("status") || "");
        setPropertyType(searchParams.get("type") || "");
        setPreferedCity(searchParams.get("city") || "");
        setPriceRange(parseInt(searchParams.get("price") || "0"));
    }, [searchParams]);

    return (
        <Card className="border-none shadow-xl my-5">
            <CardContent className="pt-6 flex flex-wrap justify-between gap-6">
                <Select
                    value={propertystatus}
                    onValueChange={(value) => setPropertyStatus(value)}
                >
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Looking For</SelectLabel>
                            <SelectItem value="rentals">For Rent</SelectItem>
                            <SelectItem value="sales">For Sale</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select
                    value={propertytype}
                    onValueChange={(value) => setPropertyType(value)}
                >
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
                <Select
                    value={preferedcity}
                    onValueChange={(value) => setPreferedCity(value)}
                >
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
                <Button
                    onClick={() =>
                        router.replace("/properties", { scroll: false })
                    }
                >
                    Reset
                </Button>
                <div className="w-full">
                    <div className="w-full flex justify-between items-center">
                        <p>Price:</p> <p>{priceRange}</p>
                    </div>
                    <Slider
                        defaultValue={[priceRange]}
                        min={10000}
                        max={100000000}
                        step={10000}
                        onValueChange={(values) => setPriceRange(values[0])}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default FilterOptions;
