"use client";
import { GeoLocatedProperty } from "@/lib/types";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import PropertyGeoLocationMarker from "../shared/PropertyGeoLocationMarker/PropertyGeoLocationMarker";

type Props = {
    properties: GeoLocatedProperty[];
};

const PropertiesLocationMap = ({ properties }: Props) => {
    return (
        <MapContainer
            center={
                properties?.length
                    ? (properties[0]?.geolocation as LatLngExpression)
                    : [23.8041, 90.4152]
            }
            zoom={12}
            attributionControl={false}
            className="w-full h-96 md:h-full relative z-10 rounded-md"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {properties &&
                properties?.length &&
                properties.map((property, i) => (
                    <PropertyGeoLocationMarker property={property} key={i} />
                ))}
        </MapContainer>
    );
};

export default PropertiesLocationMap;
