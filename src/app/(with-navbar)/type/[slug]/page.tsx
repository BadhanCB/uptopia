import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { getProperties } from "@/lib/fetchers";
import { GeoLocatedProperty } from "@/lib/types";

type Props = {
    params: { slug: string };
};

const PropertyByType = async ({ params }: Props) => {
    const properties: GeoLocatedProperty[] = await getProperties({
        type: params.slug,
    });

    return (
        <main className="bg-gray-50 py-4 md:py-8 lg:py-12">
            <div className="wrapper">
                <h1>{params.slug}</h1>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                    {properties && properties?.length ? (
                        properties.map((pty) => (
                            <PropertyCard property={pty} key={pty._id} />
                        ))
                    ) : (
                        <p>No Property Found</p>
                    )}
                </section>
                <section>Property by type</section>
            </div>
        </main>
    );
};

export default PropertyByType;
