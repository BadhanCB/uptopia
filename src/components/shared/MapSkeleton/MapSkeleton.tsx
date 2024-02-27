import Image from "next/image";
import mapSkeleton from "@/assets/img/map-skeleton.svg";

const MapSkeleton = () => {
    return (
        <div className="w-full h-[75vh] relative z-10 animate-pulse overflow-hidden">
            <Image
                src={mapSkeleton}
                alt="map skeleton"
                priority
                quality={50}
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default MapSkeleton;
