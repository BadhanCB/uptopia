"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
    ChangeEvent,
    ChangeEventHandler,
    Dispatch,
    MouseEvent,
    SetStateAction,
} from "react";
import { IoImageOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

type Props = {
    imgFiles: File[];
    setImgFiles: Dispatch<SetStateAction<File[]>>;
};

const ImageInputFields = ({ imgFiles, setImgFiles }: Props) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setImgFiles((prev) => [...prev, files[0]]);
    };

    const handleRemove = (index: number) => {
        setImgFiles((prev) => prev.filter((prevImg, i) => i !== index));
    };

    return (
        <div>
            <h3 className="text-gray-500 mb-2">
                Images <small>(at least one image is required)</small>
            </h3>
            <div className="flex flex-wrap gap-6">
                {imgFiles &&
                    imgFiles.map((imgFl, i) => (
                        <div
                            key={i}
                            className="border h-40 w-40 bg-white relative"
                        >
                            <Image
                                src={URL.createObjectURL(imgFl)}
                                alt={`property-img-${i}`}
                                fill
                                className="object-contain"
                            />
                            <Button
                                className="absolute bottom-0 right-0"
                                size="icon"
                                variant="outline"
                                onClick={() => handleRemove(i)}
                            >
                                <MdDelete className="text-2xl text-lime-600" />
                            </Button>
                        </div>
                    ))}
                <Label htmlFor="images" className="w-fit">
                    <div className="w-40 h-40 border bg-white flex flex-wrap justify-center items-center cursor-pointer text-gray-400">
                        <IoImageOutline className="text-5xl" />
                        <p>click here to select</p>
                    </div>
                </Label>
                <Input
                    id="images"
                    name="images"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default ImageInputFields;
