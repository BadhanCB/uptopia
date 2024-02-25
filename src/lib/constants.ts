import studioImg from "@/assets/img/studio.jpg";
import familyImg from "@/assets/img/family.jpg";
import appartmentImg from "@/assets/img/appartment.jpg";
import villaImg from "@/assets/img/villa.jpg";
import officeImg from "@/assets/img/office.jpg";
import shopImg from "@/assets/img/shop.jpg";

const categories = [
    {
        imgUrl: studioImg,
        title: "studio",
        slug: "/category/studio",
        totalPropertirs: 7,
        className: "col-span-3 md:col-span-1 md:row-span-2",
    },
    {
        imgUrl: familyImg,
        title: "Single Family Home",
        slug: "/category/family",
        totalPropertirs: 13,
    },
    {
        imgUrl: appartmentImg,
        title: "Apartment",
        slug: "/category/apartment",
        totalPropertirs: 24,
    },
    {
        imgUrl: villaImg,
        title: "Villa",
        slug: "/category/villa",
        totalPropertirs: 6,
    },
    {
        imgUrl: officeImg,
        title: "office",
        slug: "/category/office",
        totalPropertirs: 17,
    },
    {
        imgUrl: shopImg,
        title: "shop",
        slug: "/category/shop",
        totalPropertirs: 28,
    },
];

export { categories };
