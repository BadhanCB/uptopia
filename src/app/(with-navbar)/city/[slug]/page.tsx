import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";
import { getProperties } from "@/lib/fetchers";
import { GeoLocatedProperty } from "@/lib/types";
import Link from "next/link";
import React, { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
    params: { slug: string };
};

const PropertybyCity = async ({ params }: Props) => {
    const properties: GeoLocatedProperty[] = await getProperties({
        city: params.slug,
    });

    return (
        <main className="bg-gray-50 py-4 md:py-8 lg:py-12 min-h-[calc(100vh-82px)]">
            <h1 className="capitalize text-3xl text-center mb-5">
                {params.slug}
            </h1>
            <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8">
                <section className="md:col-span-9 xl:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-6">
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
                    <h2 className="text-xl mb-4">Top Cities</h2>
                    <ul className="text-indigo-600 ml-4 grid gap-1">
                        <li>
                            <Link
                                href="/city/dhaka"
                                className="flex items-center"
                            >
                                <IoIosArrowForward />
                                Dhaka
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/city/chittagong"
                                className="flex items-center"
                            >
                                <IoIosArrowForward />
                                Chittagong
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/city/rangpur"
                                className="flex items-center"
                            >
                                <IoIosArrowForward />
                                Rangpur
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/city/sylhet"
                                className="flex items-center"
                            >
                                <IoIosArrowForward />
                                Sylhet
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default PropertybyCity;
