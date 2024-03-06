import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { IoImageOutline } from "react-icons/io5";

type Props = {
    imgFiles: FileList | null;
    setImgFiles: Dispatch<SetStateAction<FileList | null>>;
};

const SingleImageInputFields = ({
    imgFiles: imgFile,
    setImgFiles: setImgFile,
}: Props) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!e.target.files) return;
        setImgFile(e.target.files);
    };

    return (
        <div>
            <h3 className="text-gray-500 mb-2">
                Image <small>(image is required)</small>
            </h3>
            <div className="flex flex-wrap gap-6">
                {imgFile && (
                    <div className="border h-40 w-40 bg-white relative">
                        <Image
                            src={URL.createObjectURL(imgFile[0])}
                            alt="property-img"
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                <Label htmlFor="images" className="w-fit">
                    <div className="w-40 h-40 border bg-white flex flex-wrap justify-center items-center cursor-pointer text-gray-400">
                        <IoImageOutline className="text-5xl" />
                        <p>
                            {imgFile ? "Change Image" : "click here to select"}
                        </p>
                    </div>
                </Label>
                <Input
                    id="images"
                    name="images"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                    accept="image/*"
                />
            </div>
        </div>
    );
};

export default SingleImageInputFields;
