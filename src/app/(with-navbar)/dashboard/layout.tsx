import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
    return (
        <main className="wrapper py-4 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-12">
            <Sidebar />
            {children}
        </main>
    );
};

export default DashboardLayout;
