import TopNavBar from "@/components/shared/TopNavBar/TopNavBar";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <>
            <TopNavBar className="bg-gray-50" />
            {children}
        </>
    );
};

export default layout;
