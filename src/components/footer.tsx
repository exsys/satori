import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear: number = new Date().getFullYear();

    return (
        <footer className="bg-main-primary font-poppins pt-52">
            <div className="flex flex-col gap-6 lg:flex-row justify-between items-center lg:items-start w-4/5 xl:w-3/4
            mx-auto pb-12">
                <div className="flex justify-center">
                    <Image src={"/logos/logo.png"} width={100} height={56} alt="logo" priority />
                </div>
                <div className="xl:grow xl:mx-24 2xl:mx-32">
                    <nav className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 xl:justify-between">
                        <div className="text-center">
                            <h2 className="text-2xl font-medium tracking-wide">Company</h2>
                            <ul className="space-y-1">
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>About</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Contact Us</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Careers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-medium tracking-wide">Services</h2>
                            <ul className="space-y-1">
                                <li>
                                    <Link href={"/"}>Learn more</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Product</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Business</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-medium tracking-wide">Community</h2>
                            <ul className="space-y-1">
                                <li>
                                    <Link href={"/"}>Twitter</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Telegram</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Discord</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Instagram</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>© Icarus {currentYear} All rights reserved</div>
            </div>
        </footer>
    )
}