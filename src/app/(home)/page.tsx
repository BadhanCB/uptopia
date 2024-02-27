import Category from "@/components/Home/Category/Category";
import ExploreCities from "@/components/Home/ExploreCities/ExploreCities";
import FeaturedProperties from "@/components/Home/FeaturedProperties/FeaturedProperties";
import MostViewedProperties from "@/components/Home/MostViewedProperties/MostViewedProperties";
import RecentListings from "@/components/Home/RecentListings/RecentListings";
import TopMapBanner from "@/components/Home/TopMapBanner/TopMapBanner";

export default function Home() {
    return (
        <main>
            <TopMapBanner />
            <RecentListings />
            <Category />
            <FeaturedProperties />
            <ExploreCities />
            <MostViewedProperties />
        </main>
    );
}
