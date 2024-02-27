import OptionCard from "@/components/shared/OptionCard/OptionCard";
import { propertyTypes } from "@/lib/constants";

const Category = () => {
    return (
        <section className="wrapper py-12 md:py-16 lg:py-20 grid grid-cols-3 grid-rows-[repeat(1,_300px)] auto-rows-[300px] gap-8 md:w-11/12 lg:w-10/12 xl:w-3/4">
            <div className="p-4 self-center col-span-3 md:col-span-1">
                <h1 className="text-2xl mb-4">Residential</h1>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, maxime!
                </p>
            </div>
            <OptionCard
                option={propertyTypes[0]}
                className="col-span-3 md:col-span-1 md:row-span-2"
            />
            <OptionCard
                option={propertyTypes[1]}
                className="col-span-3 md:col-span-1"
            />
            <OptionCard
                option={propertyTypes[2]}
                className="col-span-3 md:col-span-1"
            />
            <OptionCard
                option={propertyTypes[3]}
                className="col-span-3 md:col-span-1"
            />
            <div className="col-span-3 md:col-span-1 p-4 self-center">
                <h1 className="text-2xl mb-4">Commercial</h1>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, maxime!
                </p>
            </div>
            <OptionCard
                option={propertyTypes[4]}
                className="col-span-3 md:col-span-1"
            />
            <OptionCard
                option={propertyTypes[5]}
                className="col-span-3 md:col-span-1"
            />
        </section>
    );
};

export default Category;
