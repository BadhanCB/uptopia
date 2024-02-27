import Category from "@/pages/Home/Category/Category";
import ExploreCities from "@/pages/Home/ExploreCities/ExploreCities";
import FeaturedProperties from "@/pages/Home/FeaturedProperties/FeaturedProperties";
import MostViewedProperties from "@/pages/Home/MostViewedProperties/MostViewedProperties";
import RecentListings from "@/pages/Home/RecentListings/RecentListings";
import TopMapBanner from "@/pages/Home/TopMapBanner/TopMapBanner";

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
