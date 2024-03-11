import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiPlay } from "react-icons/fi";

type Props = {
    option: {
        imgUrl: StaticImageData;
        title: string;
        slug: string;
        totalPropertirs: number;
    };
    className?: string;
};

const OptionCard = ({
    className,
    option: { imgUrl, slug, title, totalPropertirs },
}: Props) => {
    return (
        <Link
            href={slug}
            className={`${className} relative cursor-pointer text-gray-50 group overflow-hidden rounded shadow-xl hover:-translate-y-3 transition-transform duration-300`}
        >
            <div className="absolute h-full w-full -z-20">
                <Image
                    placeholder="blur"
                    src={imgUrl}
                    alt={title}
                    className="object-cover object-center h-full w-full"
                />
            </div>
            <div className="absolute h-full w-full bg-slate-700 opacity-50 group-hover:opacity-25 transition-opacity duration-300 -z-10"></div>
            <div className="h-full w-full p-8 flex flex-col justify-between">
                <div>
                    <p className="text-xs capitalize">
                        {totalPropertirs} properties
                    </p>
                    <h3 className="text-2xl capitalize">{title}</h3>
                </div>
                <p className="flex items-center justify-between uppercase">
                    More Details <FiPlay />
                </p>
            </div>
        </Link>
    );
};

export default OptionCard;
