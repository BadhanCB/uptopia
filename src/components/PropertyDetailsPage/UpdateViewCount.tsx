"use client";

import { updateViewCount } from "@/lib/fetchers";
import { useEffect } from "react";

type Props = {
    slug: string;
};

const UpdateViewCount = ({ slug }: Props) => {
    useEffect(() => {
        const updateView = async () => {
            try {
                await updateViewCount(slug);
            } catch (error) {
                console.log(error);
            }
        };

        const updateViewTimeout = setTimeout(updateView, 10000);

        return () => clearTimeout(updateViewTimeout);
    }, [slug]);

    return null;
};

export default UpdateViewCount;
