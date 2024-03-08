type Props = {
    realtor: {
        name: string;
        email: string;
    };
};

const ContactOptions = ({ realtor: { name, email } }: Props) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-md sticky top-6">
            <h4>{name}</h4>
            <p className="text-gray-500">
                <span className="text-gray-300">Email:</span>
                {email}
            </p>
        </div>
    );
};

export default ContactOptions;
