import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import PropertySlider from "./PropertySlider";

const RecentListings = () => {
    return (
        <section className="text-center py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="wrapper">
                <SectionHeader
                    title="recent listings"
                    description="Our distinctive buildings fill the skyline and streetscapes
                    of the city. Conceived with innovative design and
                    exceptional amenities."
                />
                <PropertySlider />
            </div>
        </section>
    );
};

export default RecentListings;
