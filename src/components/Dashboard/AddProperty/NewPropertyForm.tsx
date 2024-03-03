"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CategoryInputFields from "./CategoryInputFields";
import LocationInputFiends from "./LocationInputFiends";
import dynamic from "next/dynamic";
import DetailsInfoInputFields from "./DetailsInfoInputFields";
import ImageInputFields from "./ImageInputFields";
import { FormEventHandler, useState } from "react";
const GeolocationInputFields = dynamic(
    () => import("./GeolocationInputFields"),
    { ssr: false, loading: () => <p>Loading...</p> }
);

const NewPropertyForm = () => {
    const [imgFiles, setImgFiles] = useState<File[]>([]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-6 mt-8">
            <ImageInputFields imgFiles={imgFiles} setImgFiles={setImgFiles} />
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Title</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Building Complex Apartments"
                />
            </div>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    placeholder="Type property description here..."
                    id="description"
                    name="description"
                />
            </div>
            <DetailsInfoInputFields />
            <CategoryInputFields />
            <LocationInputFiends />
            <GeolocationInputFields />
            <Button type="submit" className="w-fit ml-auto">
                Submit Property
            </Button>
        </form>
    );
};

export default NewPropertyForm;
