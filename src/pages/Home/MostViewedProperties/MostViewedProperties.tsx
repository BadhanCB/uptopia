import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import MostViewedPropertyArea from "./MostViewedPropertyArea";

const MostViewedProperties = () => {
    return (
        <section className="bg-gray-50">
            <div className="wrapper py-12 md:py-16 lg:py-20">
                <SectionHeader
                    title="Properties in focus"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eligendi eos eaque accusamus, quae beatae."
                />
                <MostViewedPropertyArea />
            </div>
        </section>
    );
};

export default MostViewedProperties;
