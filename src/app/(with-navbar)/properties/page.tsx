import FilterOptions from "@/components/Properties/FilterOptions";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { getProperties } from "@/lib/fetchers";
import { GeoLocatedProperty } from "@/lib/types";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

const Properties = async ({ searchParams }: Props) => {
    const { status = "", type = "", city = "", price = "" } = searchParams;
    const properties: GeoLocatedProperty[] = await getProperties({
        status,
        type,
        city,
        price,
    });

    return (
        <main className="bg-gray-100">
            <div className="wrapper py-4 md:py-8 lg:py-12">
                <h1>Properties</h1>
                <FilterOptions />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {properties?.length ? (
                        properties.map((pty) => (
                            <PropertyCard property={pty} key={pty._id} />
                        ))
                    ) : (
                        <h3>No Property Found</h3>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Properties;
