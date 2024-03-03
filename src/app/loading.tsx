import { LuLoader } from "react-icons/lu";

const Loading = () => {
    return (
        <main className="w-full h-[calc(100vh-82px)] flex justify-center items-center">
            <LuLoader className="text-5xl animate-spin" />
        </main>
    );
};

export default Loading;
