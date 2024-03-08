"use client";
import { LatLngExpression, icon } from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";

const customMarkerIcon = icon({
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
    geolocation: number[];
    address: string;
};

const LocationMap = ({ geolocation, address }: Props) => {
    return (
        <MapContainer
            center={geolocation as LatLngExpression}
            zoom={15}
            attributionControl={false}
            className="w-full h-96 relative z-10 mt-6"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
                position={geolocation as LatLngExpression}
                icon={customMarkerIcon}
            >
                <Tooltip permanent>{address}</Tooltip>
            </Marker>
        </MapContainer>
    );
};

export default LocationMap;
