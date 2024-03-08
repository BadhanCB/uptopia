import { getProperties } from "@/lib/fetchers";
import { GeoLocatedProperty } from "@/lib/types";

const Properties = async () => {
    const properties: GeoLocatedProperty[] = await getProperties();
    console.log(properties);

    return (
        <div>
            <h1>Properties</h1>
        </div>
    );
};

export default Properties;
