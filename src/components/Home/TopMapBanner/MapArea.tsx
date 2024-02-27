"use client";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import propertyImg from "@/assets/img/house.jpg";
import { StaticImageData } from "next/image";
const PropertyGeoLocationMarker = dynamic(
    () => import("./PropertyGeoLocationMarker"),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    }
);

const MapArea = () => {
    const geoPosition: LatLngExpression = [23.78, 90.39];

    const properties: {
        img: StaticImageData | string;
        title: string;
        price: number;
        geoLocation: LatLngExpression;
        type: string;
    }[] = [
        {
            img: propertyImg,
            title: "Property in Dhaka",
            price: 1700,
            geoLocation: [23.75735174468709, 90.36545631669179],
            type: "Residential House",
        },
        {
            img: propertyImg,
            title: "Property in Dhaka",
            price: 1700,
            geoLocation: [23.775490974214218, 90.40582540303919],
            type: "Shop",
        },
        {
            img: propertyImg,
            title: "Property in Dhaka",
            price: 1700,
            geoLocation: [23.754759467205545, 90.39161639902238],
            type: "Office",
        },
        {
            img: propertyImg,
            title: "Property in Dhaka",
            price: 1700,
            geoLocation: [23.80446787863355, 90.35935885202457],
            type: "Studio",
        },
        {
            img: propertyImg,
            title: "Property in Dhaka",
            price: 1700,
            geoLocation: [23.820170988723024, 90.44602960462937],
            type: "Villa",
        },
    ];

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
