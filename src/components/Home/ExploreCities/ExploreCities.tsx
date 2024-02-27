import OptionCard from "@/components/shared/OptionCard/OptionCard";
import { cities } from "@/lib/constants";

const ExploreCities = () => {
    return (
        <section className="wrapper py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3 self-center">
                <h1 className="text-2xl mb-6 tracking-wider font-light text-center xl:text-start">
                    Explore Top Cities
                </h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    eligendi eos eaque accusamus, quae beatae.
                </p>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-[repeat(1,_20rem)] auto-rows-[20rem] lg:grid-rows-[repeat(1,_25rem)] lg:auto-rows-[25rem] xl:grid-rows-[repeat(1,_30rem)] xl:auto-rows-[30rem] gap-8">
                {cities.map((city, i) => (
                    <OptionCard option={city} key={i} />
                ))}
            </div>
        </section>
    );
};

export default ExploreCities;
