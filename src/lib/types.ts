export type LoginInfo = {
    email: string;
    password: string;
};

export type LoginResponse = {
    data: {
        email: string;
        name: string;
    };

    message: string;
};

export type SignupInfo = LoginInfo & {
    name: string;
};

export type User = {
    name?: string;
    email?: string;
};

export type Property = {
    _id: string;
    imageUrl: string;
    title: string;
    price: number;
    propertySize: number;
    bedrooms: number;
    bathrooms: number;
    garages: number;
    address: string;
    status: string;
    propertyType: string;
    slug: string;
    realtor: { name: string; email: string };
    createdAt: string;
};

export type GeoLocatedProperty = Property & {
    geolocation: number[];
};

export type PropertyDetails = GeoLocatedProperty & {
    description: string;
    city: string;
    division: string;
    zip: number;
    country: string;
    viewCount: number;
    isFeatured: boolean;
};
