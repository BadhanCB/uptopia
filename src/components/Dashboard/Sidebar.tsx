import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="md:col-span-3 lg:col-span-2 gap-6">
            <ul>
                <li>
                    <Link href="/dashboard">Profile</Link>
                </li>
                <li>
                    <Link href="/dashboard/add-property">Add Property</Link>
                </li>
                <li>
                    <Link href="/dashboard/manage">Manage Properties</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
