import TopNavBar from "@/components/shared/TopNavBar/TopNavBar";

type Props = {
    children: React.ReactNode;
};

const LayoutWithNavbar = ({ children }: Props) => {
    return (
        <>
            <TopNavBar className="bg-gray-50" />
            {children}
        </>
    );
};

export default LayoutWithNavbar;
