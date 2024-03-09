"use client";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Property } from "@/lib/types";
import PropertyCard from "@/components/shared/PropertyCard/PropertyCard";

type Props = {
    latestProperties: Property[];
};

const PropertySlider = ({ latestProperties }: Props) => {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (
        <div className="py-4 relative w-11/12 md:w-5/6 lg:w-3/4 mx-auto">
            <div className="flex gap-3 justify-end items-center text-2xl mb-2">
                <button
                    onClick={prevHandler}
                    className="p-2 rounded bg-sky-200 text-indigo-600 hover:bg-indigo-600 hover:text-gray-50"
                >
                    <FiArrowLeft />
                </button>
                <button
                    onClick={nextHandler}
                    className="p-2 rounded bg-sky-200 text-indigo-600 hover:bg-indigo-600 hover:text-gray-50"
                >
                    <FiArrowRight />
                </button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                modules={[Autoplay, Navigation, Pagination, A11y]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{
                    clickable: true,
                    el: ".recent-listing-slider-pagination",
                }}
                onSwiper={(swiper) => setSwiperRef(swiper)}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 15 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                    1920: { slidesPerView: 4, spaceBetween: 25 },
                }}
            >
                {latestProperties &&
                    latestProperties?.length &&
                    latestProperties.map((lp) => (
                        <SwiperSlide key={lp._id} className="py-4">
                            <PropertyCard property={lp} />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="recent-listing-slider-pagination" />
        </div>
    );
};

export default PropertySlider;
