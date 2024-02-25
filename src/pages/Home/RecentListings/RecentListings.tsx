import PropertySlider from "./PropertySlider";

const RecentListings = () => {
    return (
        <section className="text-center py-12 bg-gray-50">
            <div className="wrapper">
                <h1 className="capitalize text-3xl font-medium mb-4">
                    recent listings
                </h1>
                <p className="md:w-3/4 lg:w-2/4 mx-auto text-gray-500">
                    Our distinctive buildings fill the skyline and streetscapes
                    of the city. Conceived with innovative design and
                    exceptional amenities.
                </p>
                <PropertySlider />
            </div>
        </section>
    );
};

export default RecentListings;
