import NewPropertyForm from "@/components/Dashboard/AddProperty/NewPropertyForm";

const AddProperty = () => {
    return (
        <section className="md:col-span-9 lg:col-span-10 p-4 md:p-8 lg:p-12 bg-gray-50">
            <h1 className="text-4xl">Add New Property</h1>
            <NewPropertyForm />
        </section>
    );
};

export default AddProperty;
