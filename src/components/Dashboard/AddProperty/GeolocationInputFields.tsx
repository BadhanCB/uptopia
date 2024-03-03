"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const GeolocationInputFields = () => {
    const [geolocation, setGeolocation] = useState([23.8041, 90.4152]);

    return (
        <div>
            <h3 className="text-gray-500 mb-2">
                Geolocation{" "}
                <small>
                    (Click to the exact location of the property in the Map)
                </small>
            </h3>
            <div className="flex flex-wrap gap-6">
                <div className="w-full h-60">
                    <MapContainer
                        center={[23.8041, 90.4152]}
                        zoom={13}
                        attributionControl={false}
                        className="w-full h-full"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <MapMarker
                            geolocation={geolocation}
                            setGeolocation={setGeolocation}
                        />
                    </MapContainer>
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input
                        type="number"
                        id="latitude"
                        name="latitude"
                        value={geolocation[0]}
                        readOnly
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input
                        type="number"
                        id="longitude"
                        name="longitude"
                        value={geolocation[1]}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default GeolocationInputFields;
