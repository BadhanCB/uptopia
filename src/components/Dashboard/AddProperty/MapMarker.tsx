"use client";
import { LatLngExpression, icon } from "leaflet";
import { Dispatch, SetStateAction, useState } from "react";
import { Marker, Tooltip, useMapEvent } from "react-leaflet";

import iconMarker2x from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
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
    setGeolocation: Dispatch<SetStateAction<number[]>>;
};
const MapMarker = ({ geolocation, setGeolocation }: Props) => {
    useMapEvent("click", (e) => setGeolocation([e.latlng.lat, e.latlng.lng]));

    return (
        <Marker
            position={geolocation as LatLngExpression}
            icon={customMarkerIcon}
        >
            <Tooltip permanent>
                Lat: {geolocation[0]} <br /> Lng: {geolocation[1]}
            </Tooltip>
        </Marker>
    );
};

export default MapMarker;
