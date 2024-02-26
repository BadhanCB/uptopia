type Props = {
    title: string;
    description: string;
};

const SectionHeader = ({ title, description }: Props) => {
    return (
        <>
            <h1 className="capitalize text-3xl font-medium mb-4">{title}</h1>
            <p className="md:w-3/4 lg:w-2/4 mx-auto text-gray-500">
                {description}
            </p>
        </>
    );
};

export default SectionHeader;
