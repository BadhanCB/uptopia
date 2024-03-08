import dynamic from "next/dynamic";
import { Separator } from "../ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
const LocationMap = dynamic(() => import("./LocationMap"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

type Props = {
    city: string;
    division: string;
    zip: number;
    country: string;
    address: string;
    geolocation: number[];
};

const PropertyLocationCard = ({
    city,
    division,
    zip,
    country,
    address,
    geolocation,
}: Props) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-md">
            <h3>Property Location</h3>
            <Separator className="my-3" />
            <Table className="border-b">
                <TableBody>
                    <TableRow>
                        <TableCell className="w-[100px] font-medium">
                            Address
                        </TableCell>
                        <TableCell className="text-right">{address}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="w-[100px] font-medium">
                                City
                            </TableCell>
                            <TableCell className="text-right">{city}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Division/state
                            </TableCell>
                            <TableCell className="text-right">
                                {division}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">ZIP</TableCell>
                            <TableCell className="text-right">{zip}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Country
                            </TableCell>
                            <TableCell className="text-right">
                                {country}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <LocationMap geolocation={geolocation} address={address} />
        </div>
    );
};

export default PropertyLocationCard;
