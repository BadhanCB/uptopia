"use client";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import { GeoLocatedProperty } from "@/lib/types";
import { useEffect, useState } from "react";
import { getFeaturedProperties } from "@/lib/fetchers";
const PropertyGeoLocationMarker = dynamic(
    () => import("./PropertyGeoLocationMarker"),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    }
);

const MapArea = () => {
    const geoPosition: LatLngExpression = [23.78, 90.39];
    const [properties, setProperties] = useState<GeoLocatedProperty[]>([]);

    useEffect(() => {
        const getProperties = async () => {
            const data: GeoLocatedProperty[] = await getFeaturedProperties();
            setProperties(data);
        };

        getProperties();
    }, []);

    return (
        <MapContainer
            center={geoPosition}
            zoom={12}
            scrollWheelZoom={false}
            attributionControl={false}
            zoomControl={false}
            className="w-full h-[75vh] relative z-10"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ZoomControl position="bottomright" />
            {properties.map((property, i) => (
                <PropertyGeoLocationMarker property={property} key={i} />
            ))}
        </MapContainer>
    );
};

export default MapArea;
