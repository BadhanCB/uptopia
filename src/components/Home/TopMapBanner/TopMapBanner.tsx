import MapSkeleton from "@/components/shared/MapSkeleton/MapSkeleton";
import TopNavBar from "@/components/shared/TopNavBar/TopNavBar";
import dynamic from "next/dynamic";
import SearchBar from "./SearchBar";

const MapArea = dynamic(() => import("./MapArea"), {
    ssr: false,
    loading: () => <MapSkeleton />,
});

const TopMapBanner = () => {
    return (
        <section className="relative">
            <TopNavBar className="absolute top-0 bg-gradient-to-b from-slate-500 to-transparent text-gray-50" />
            <MapArea />
            <SearchBar />
        </section>
    );
};

export default TopMapBanner;
