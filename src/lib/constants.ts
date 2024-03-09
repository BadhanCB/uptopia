import studioImg from "@/assets/img/studio.jpg";
import familyImg from "@/assets/img/family.jpg";
import appartmentImg from "@/assets/img/appartment.jpg";
import villaImg from "@/assets/img/villa.jpg";
import officeImg from "@/assets/img/office.jpg";
import shopImg from "@/assets/img/shop.jpg";

const propertyTypes = [
    {
        imgUrl: studioImg,
        title: "studio",
        slug: "/properties?type=studio",
        totalPropertirs: 7,
        className: "col-span-3 md:col-span-1 md:row-span-2",
    },
    {
        imgUrl: familyImg,
        title: "Single Family Home",
        slug: "/properties?type=sigle-family",
        totalPropertirs: 13,
    },
    {
        imgUrl: appartmentImg,
        title: "Apartment",
        slug: "/properties?type=apartment",
        totalPropertirs: 24,
    },
    {
        imgUrl: villaImg,
        title: "Villa",
        slug: "/properties?type=villa",
        totalPropertirs: 6,
    },
    {
        imgUrl: officeImg,
        title: "office",
        slug: "/properties?type=office",
        totalPropertirs: 17,
    },
    {
        imgUrl: shopImg,
        title: "shop",
        slug: "/properties?type=shop",
        totalPropertirs: 28,
    },
];

const cities = [
    {
        imgUrl: appartmentImg,
        title: "Dhaka",
        slug: "/properties?city=dhaka",
        totalPropertirs: 24,
    },
    {
        imgUrl: villaImg,
        title: "chittagong",
        slug: "/properties?city=chittagong",
        totalPropertirs: 6,
    },
    {
        imgUrl: officeImg,
        title: "rangpur",
        slug: "/properties?city=rangpur",
        totalPropertirs: 17,
    },
    {
        imgUrl: shopImg,
        title: "sylhet",
        slug: "/properties?city=sylhet",
        totalPropertirs: 28,
    },
];

export { propertyTypes, cities };
