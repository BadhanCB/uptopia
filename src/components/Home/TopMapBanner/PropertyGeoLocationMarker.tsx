"use client";
import { Marker, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
const GeoLocPopup = dynamic(() => import("./GeoLocPopup"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const customMarkerIcon = L.icon({
    iconUrl: iconMarker.src,
    iconRetinaUrl: iconMarker2x.src,
    shadowUrl: iconShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

type Props = {
    property: {
        img: StaticImageData | string;
        title: string;
        price: number;
        geoLocation: LatLngExpression;
        type: string;
    };
};

const PropertyGeoLocationMarker = ({ property }: Props) => {
    const { geoLocation, type } = property;

    return (
        <Marker position={geoLocation} icon={customMarkerIcon}>
            <Tooltip>{type}</Tooltip>
            <GeoLocPopup property={property} />
        </Marker>
    );
};

export default PropertyGeoLocationMarker;