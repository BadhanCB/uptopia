import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import PropertiesCardArea from "./PropertiesCardArea";

const FeaturedProperties = () => {
    return (
        <section className="text-center py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="wrapper">
                <SectionHeader
                    title="Featured Properties"
                    description="Here are four listings that are displayed using the featured property shorcode. Use this shortcode when you have some special listings to showcase."
                />
                <PropertiesCardArea />
            </div>
        </section>
    );
};

export default FeaturedProperties;
