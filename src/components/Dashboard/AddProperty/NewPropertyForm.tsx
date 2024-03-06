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
import { useToast } from "@/components/ui/use-toast";
import { createNewProperty } from "@/lib/fetchers";
import SingleImageInputFields from "./SingleImageInputFields";
import { FiLoader } from "react-icons/fi";
const GeolocationInputFields = dynamic(
    () => import("./GeolocationInputFields"),
    { ssr: false, loading: () => <p>Loading...</p> }
);

const NewPropertyForm = () => {
    const [imgFiles, setImgFiles] = useState<FileList | null>(null);
    const [status, setStatus] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const form = e.target as HTMLFormElement & {
                title: { value: string };
                description: { value: string };
                price: { value: string };
                propertySize: { value: string };
                bedrooms: { value: string };
                bathrooms: { value: string };
                garages: { value: string };
                address: { value: string };
                city: { value: string };
                division: { value: string };
                zip: { value: string };
                country: { value: string };
                latitude: { value: string };
                longitude: { value: string };
            };

            const title = form.title.value;
            const description = form.description.value;
            const price = form.price.value;
            const propertySize = form.propertySize.value;
            const bedrooms = form.bedrooms.value;
            const bathrooms = form.bathrooms.value;
            const garages = form.garages.value;
            const address = form.address.value;
            const city = form.city.value;
            const division = form.division.value;
            const zip = form.zip.value;
            const country = form.country.value;
            const latitude = form.latitude.value;
            const longitude = form.longitude.value;

            if (
                !title ||
                !description ||
                !price ||
                !propertySize ||
                !bedrooms ||
                !bathrooms ||
                !garages ||
                !address ||
                !city ||
                !division ||
                !zip ||
                !country ||
                !latitude ||
                !longitude ||
                !imgFiles ||
                !status ||
                !propertyType
            ) {
                toast({
                    description: "Fill up all the input fields",
                    variant: "destructive",
                });
                setIsLoading(false);
                return;
            }

            const formData = new FormData();

            formData.append("image", imgFiles[0]);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("propertySize", propertySize);
            formData.append("bedrooms", bedrooms);
            formData.append("bathrooms", bathrooms);
            formData.append("garages", garages);
            formData.append("address", address);
            formData.append("city", city);
            formData.append("division", division);
            formData.append("zip", zip);
            formData.append("country", country);
            formData.append("latitude", latitude);
            formData.append("longitude", longitude);
            formData.append("status", status);
            formData.append("propertyType", propertyType);

            const resData = await createNewProperty(formData);
            form.reset();
            setImgFiles(null);
            setStatus("");
            setPropertyType("");
            setIsLoading(false);
            toast({ title: resData.message });
        } catch (error) {
            let errMsg = "Failed to Create new Property";
            if (error instanceof Error) {
                errMsg = error.message;
            }
            toast({ title: errMsg, variant: "destructive" });
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="grid gap-6 mt-8"
        >
            <SingleImageInputFields
                imgFiles={imgFiles}
                setImgFiles={setImgFiles}
            />
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="title">Title</Label>
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
            <CategoryInputFields
                status={status}
                setStatus={setStatus}
                propertyType={propertyType}
                setPropertyType={setPropertyType}
            />
            <LocationInputFiends />
            <GeolocationInputFields />
            <Button
                disabled={isLoading}
                type="submit"
                className="w-fit ml-auto"
            >
                {isLoading && <FiLoader className="text-xl animate-spin" />}{" "}
                Submit Property
            </Button>
        </form>
    );
};

export default NewPropertyForm;
