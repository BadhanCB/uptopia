import FeaturedPropertyCard from "./FeaturedPropertyCard";
import propertyImg from "@/assets/img/house.jpg";

const PropertiesCardArea = () => {
    const property = {
        img: propertyImg,
        title: "property in dhanmondi",
        price: 5600000,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quaerat? Sunt iusto voluptatem dignissimos temporibus.",
        numberOfBedRoom: 4,
        numberOfBathRoom: 3,
        numberOfGarage: 2,
        totalArea: 1700,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8 mt-12">
            <FeaturedPropertyCard property={property} />
            <FeaturedPropertyCard property={property} />
            <FeaturedPropertyCard property={property} />
            <FeaturedPropertyCard property={property} />
        </div>
    );
};

export default PropertiesCardArea;
