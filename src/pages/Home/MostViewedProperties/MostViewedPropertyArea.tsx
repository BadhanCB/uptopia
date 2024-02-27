import propertyImg from "@/assets/img/house.jpg";
import MostViewedPropertyCard from "./MostViewedPropertyCard";

const MostViewedPropertyArea = () => {
    const property = {
        img: propertyImg,
        title: "property in dhanmondi",
        price: 5600000,
        location: "Dhanmondi",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quaerat? Sunt iusto voluptatem dignissimos temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quaerat? Sunt iusto voluptatem dignissimos temporibus.",
        numberOfBedRoom: 4,
        numberOfBathRoom: 3,
        numberOfGarage: 2,
        totalArea: 1700,
    };

    return (
        <div className="mt-12 md:w-11/12 lg:w-10/12 xl:w-3/4 mx-auto flex flex-col gap-6 md:gap-0">
            <MostViewedPropertyCard property={property} />
            <MostViewedPropertyCard property={property} />
            <MostViewedPropertyCard property={property} />
            <MostViewedPropertyCard property={property} />
        </div>
    );
};

export default MostViewedPropertyArea;
