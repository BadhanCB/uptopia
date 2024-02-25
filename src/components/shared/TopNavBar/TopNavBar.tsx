import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.svg";

const TopNavBar = () => {
    return (
        <header>
            <nav className="wrapper py-4">
                <ul className="flex justify-between items-center">
                    <div>
                        <li>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-2xl"
                            >
                                <Image
                                    src={logo}
                                    alt="Brand Logo"
                                    height={50}
                                    width={50}
                                />
                                <h1>Uptopia</h1>
                            </Link>
                        </li>
                    </div>
                    <div className="flex-1 hidden md:flex gap-8 justify-center items-center uppercase">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/properties">Properties</Link>
                        </li>
                        <li>
                            <Link href="/agency">Agency</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default TopNavBar;
