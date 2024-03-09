import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "leaflet/dist/leaflet.css";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Uptopia",
    description:
        "Uptopia is a dynamic and user-friendly real estate platform built using Next.js. It serves as a comprehensive hub for property listings, allowing users to explore available homes, apartments, and commercial spaces. With an intuitive interface, visitors can search, filter, and view detailed property information, including high-quality images, pricing, and location maps. Whether you’re a prospective buyer, seller, or investor, Uptopia provides a seamless experience for navigating the world of real estate. Explore the site at Uptopia and discover your dream property today!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
                <Toaster />
            </body>
        </html>
    );
}
