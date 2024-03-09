import { getFeaturedProperties } from "@/lib/fetchers";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import { GeoLocatedProperty } from "@/lib/types";

const PropertiesCardArea = async () => {
    const properties: GeoLocatedProperty[] = await getFeaturedProperties();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8 mt-12">
            {properties &&
                properties.map((pty) => (
                    <FeaturedPropertyCard property={pty} key={pty._id} />
                ))}
            {/* <FeaturedPropertyCard property={property} />
            <FeaturedPropertyCard property={property} />
            <FeaturedPropertyCard property={property} /> */}
        </div>
    );
};

export default PropertiesCardArea;
