import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LocationInputFiends = () => {
    return (
        <div>
            <h3 className="mb-2 text-gray-500">Property Location</h3>
            <div className="flex flex-wrap gap-6">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="address">Address</Label>
                    <Input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Write details address of the property"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="city">City</Label>
                    <Input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City name"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="division">Division</Label>
                    <Input
                        type="text"
                        id="division"
                        name="division"
                        placeholder="Division/State of the area"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="zip">ZIP</Label>
                    <Input
                        type="number"
                        id="zip"
                        name="zip"
                        placeholder="Postal ZIP Code"
                    />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                    <Label htmlFor="country">Country</Label>
                    <Input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Full Country Name"
                    />
                </div>
            </div>
        </div>
    );
};

export default LocationInputFiends;
