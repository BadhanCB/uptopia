import { PopularProperty } from "@/lib/types";
import MostViewedPropertyCard from "./MostViewedPropertyCard";
import { getPopularProperties } from "@/lib/fetchers";

const MostViewedPropertyArea = async () => {
    const properties: PopularProperty[] = await getPopularProperties();

    return (
        <div className="mt-12 md:w-11/12 lg:w-10/12 xl:w-3/4 mx-auto flex flex-col gap-6 md:gap-0">
            {properties &&
                properties?.map((pty) => (
                    <MostViewedPropertyCard key={pty._id} property={pty} />
                ))}
        </div>
    );
};

export default MostViewedPropertyArea;
