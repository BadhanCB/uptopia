import ContactOptions from "@/components/PropertyDetailsPage/ContactOptions";
import DescriptionCard from "@/components/PropertyDetailsPage/DescriptionCard";
import DetailsHeader from "@/components/PropertyDetailsPage/DetailsHeader";
import DetailsOverview from "@/components/PropertyDetailsPage/DetailsOverview";
import ImageCard from "@/components/PropertyDetailsPage/ImageCard";
import PropertyLocationCard from "@/components/PropertyDetailsPage/PropertyLocationCard";
import { getPropertyDetails } from "@/lib/fetchers";
import { GeoLocatedProperty, PropertyDetails } from "@/lib/types";
import dynamic from "next/dynamic";
const UpdateViewCount = dynamic(
    () => import("@/components/PropertyDetailsPage/UpdateViewCount"),
    { ssr: false }
);

type Props = {
    params: { slug: string };
};

export const generateStaticParams = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`,
        {
            next: { revalidate: 60 * 60 * 24 },
        }
    );

    const data: GeoLocatedProperty[] = await res.json();

    return data.map((pty) => ({ slug: pty.slug }));
};

const PropertyDetailsPage = async ({ params }: Props) => {
    const propertyDetails: PropertyDetails = await getPropertyDetails(
        params.slug
    );

    const {
        title,
        price,
        address,
        propertyType,
        status,
        bathrooms,
        bedrooms,
        garages,
        propertySize,
        imageUrl,
        description,
        city,
        division,
        zip,
        country,
        geolocation,
        realtor,
        slug,
    } = propertyDetails;

    return (
        <main className="bg-gray-100">
            <section className="wrapper py-4 md:py-8 lg:py-12">
                <DetailsHeader
                    title={title}
                    price={price}
                    address={address}
                    propertyType={propertyType}
                    status={status}
                />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
                    <div className="md:col-span-8 grid gap-8">
                        <ImageCard imageUrl={imageUrl} title={title} />
                        <DetailsOverview
                            bedrooms={bedrooms}
                            bathrooms={bathrooms}
                            garages={garages}
                            propertySize={propertySize}
                        />
                        <DescriptionCard description={description} />
                        <PropertyLocationCard
                            city={city}
                            division={division}
                            zip={zip}
                            country={country}
                            geolocation={geolocation}
                            address={address}
                        />
                    </div>
                    <div className="md:col-span-4 relative">
                        <ContactOptions realtor={realtor} />
                    </div>
                </div>
                <UpdateViewCount slug={slug} />
            </section>
        </main>
    );
};

export default PropertyDetailsPage;
