import { getPropertyDetails } from "@/lib/fetchers";
import { PropertyDetails } from "@/lib/types";

type Props = {
    params: { slug: string };
};

const PropertyDetails = async ({ params }: Props) => {
    // const propertyDetails: PropertyDetails = await getPropertyDetails(
    //     params.slug
    // );
    // console.log(propertyDetails);
    return (
        <main>
            <h1>{params.slug}</h1>
        </main>
    );
};

export default PropertyDetails;
