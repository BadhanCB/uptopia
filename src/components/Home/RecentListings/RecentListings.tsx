import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import PropertySlider from "./PropertySlider";
// import { getLatestProperties } from "@/lib/fetchers";
import { Property } from "@/lib/types";

const RecentListings = async () => {
    const latestProperties: Property[] = [
        {
            _id: "65e8d8d389ecc35b29e7ce9e",
            imageUrl:
                "https://res.cloudinary.com/ddt7tr4al/image/upload/v1709758674/shop-1709758672052_css2sr.jpg",
            title: "Office at Motijheel",
            price: 35000,
            propertySize: 700,
            bedrooms: 5,
            bathrooms: 1,
            garages: 5,
            address: "Motijheel, Dhaka",
            status: "rentals",
            propertyType: "office",
            slug: "office-at-motijheel-1709758675600",
            realtor: { name: "John Deo", email: "example@gmail.com" },
            createdAt: "2024",
        },
    ];
    // const latestProperties: Property[] = await getLatestProperties();

    return (
        <section className="text-center py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="wrapper">
                <SectionHeader
                    title="recent listings"
                    description="Our distinctive buildings fill the skyline and streetscapes
                    of the city. Conceived with innovative design and
                    exceptional amenities."
                />
                <PropertySlider latestProperties={latestProperties} />
            </div>
        </section>
    );
};

export default RecentListings;
