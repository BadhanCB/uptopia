import CategoryCard from "@/components/shared/CategoryCard/CategoryCard";
import { categories } from "@/lib/constants";

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
            <CategoryCard
                category={categories[0]}
                className="col-span-3 md:col-span-1 md:row-span-2"
            />
            <CategoryCard
                category={categories[1]}
                className="col-span-3 md:col-span-1"
            />
            <CategoryCard
                category={categories[2]}
                className="col-span-3 md:col-span-1"
            />
            <CategoryCard
                category={categories[3]}
                className="col-span-3 md:col-span-1"
            />
            <div className="col-span-3 md:col-span-1 p-4 self-center">
                <h1 className="text-2xl mb-4">Commercial</h1>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, maxime!
                </p>
            </div>
            <CategoryCard
                category={categories[4]}
                className="col-span-3 md:col-span-1"
            />
            <CategoryCard
                category={categories[5]}
                className="col-span-3 md:col-span-1"
            />
        </section>
    );
};

export default Category;
