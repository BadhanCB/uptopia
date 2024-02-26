import Category from "@/pages/Home/Category/Category";
import ExploreCities from "@/pages/Home/ExploreCities/ExploreCities";
import FeaturedProperties from "@/pages/Home/FeaturedProperties/FeaturedProperties";
import RecentListings from "@/pages/Home/RecentListings/RecentListings";

export default function Home() {
    return (
        <main>
            <RecentListings />
            <Category />
            <FeaturedProperties />
            <ExploreCities />
        </main>
    );
}
