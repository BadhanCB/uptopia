import FilterOptions from "@/components/Properties/FilterOptions";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { getProperties } from "@/lib/fetchers";
import { GeoLocatedProperty } from "@/lib/types";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const PropertiesLocationMap = dynamic(
    () => import("@/components/Properties/PropertiesLocationMap"),
    { ssr: false }
);

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
            <div className="wrapper py-4 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 md:gap-6 xl:gap-8 md:h-[calc(100vh-82px)]">
                <div className="overflow-y-auto overflow-x-hidden order-2 md:order-1">
                    <h1>Properties</h1>
                    <FilterOptions />
                    <Suspense fallback={<p>Loading..</p>}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                            {properties?.length ? (
                                properties.map((pty) => (
                                    <PropertyCard
                                        property={pty}
                                        key={pty._id}
                                    />
                                ))
                            ) : (
                                <h3>No Property Found</h3>
                            )}
                        </div>
                    </Suspense>
                </div>
                <div className="order-1 md:order-2">
                    <PropertiesLocationMap properties={properties} />
                </div>
            </div>
        </main>
    );
};

export default Properties;
