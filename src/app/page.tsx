import Category from "@/pages/Home/Category/Category";
import FeaturedProperties from "@/pages/Home/FeaturedProperties/FeaturedProperties";
import RecentListings from "@/pages/Home/RecentListings/RecentListings";

export default function Home() {
    return (
        <main>
            <RecentListings />
            <Category />
            <FeaturedProperties />
        </main>
    );
}
