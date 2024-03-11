import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { getProperties } from "@/lib/fetchers";
import { GeoLocatedProperty } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
    params: { slug: string };
};

const PropertyByType = async ({ params }: Props) => {
    const properties: GeoLocatedProperty[] = await getProperties({
        type: params.slug,
    });

    return (
        <main className="bg-gray-50 py-4 md:py-8 lg:py-12 min-h-[calc(100vh-82px)]">
            <h1 className="capitalize text-3xl text-center mb-5">
                {params.slug}
            </h1>
            <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8">
                <section className="md:col-span-9 xl:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6">
                    <Suspense fallback={<p>Loading...</p>}>
                        {properties && properties?.length ? (
                            properties.map((pty) => (
                                <PropertyCard property={pty} key={pty._id} />
                            ))
                        ) : (
                            <p>No Property Found</p>
                        )}
                    </Suspense>
                </section>
                <section className="md:col-span-3 xl:col-span-2">
                    <h2 className="text-xl mb-4">Property Type</h2>
                    <ul>
                        <li className="font-medium">Residential</li>
                        <ul className="text-indigo-600 ml-4 grid gap-1">
                            <li>
                                <Link
                                    href="/type/apartment"
                                    className="flex items-center"
                                >
                                    <IoIosArrowForward />
                                    Apartment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/type/villa"
                                    className="flex items-center"
                                >
                                    <IoIosArrowForward />
                                    Villa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/type/single-family"
                                    className="flex items-center"
                                >
                                    <IoIosArrowForward />
                                    Single Family House
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/type/multi-family"
                                    className="flex items-center"
                                >
                                    <IoIosArrowForward />
                                    Multi Family House
                                </Link>
                            </li>
                        </ul>
                        <li className="font-medium mt-2">Commercial</li>
                        <ul className="text-indigo-600 ml-4 grid gap-1">
                            <li>
                                <Link
                                    href="/type/office"
                                    className="flex items-center"
                                >
                                    <IoIosArrowForward />
                                    Office
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/type/studio"
                                    className="flex items-center"
                                >
                                    <IoIosArrowForward />
                                    Studio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/type/shop"
                                    className="flex items-center"
                                >
                                    <IoIosArrowForward />
                                    shop
                                </Link>
                            </li>
                        </ul>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default PropertyByType;
