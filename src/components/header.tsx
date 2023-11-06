"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/header.module.css";
import { useState } from "react";

export default function Header() {
    const [active, setActive] = useState(false);

    return (
        <header className="absolute w-full text-main-dark-text-1 z-20 tracking-widest">
            <div className="flex items-center justify-between w-3/4 mx-auto py-6">
                <Link href={"/"}>
                    <img src="/logos/logo.png" alt="" width={50} />
                </Link>

                {/** mobile navbar */}
                <div className="inline-block sm:hidden">
                    <div className="relative cursor-pointer z-30 p-1.5" onClick={() => setActive(!active)}>
                        <div className={`${styles["menu-icon-line"]} ${active ? styles.line1 : ""}`}></div>
                        <div className={`${styles["menu-icon-line"]} ${active ? styles.line2 : ""}`}></div>
                        <div className={`${styles["menu-icon-line"]} ${active ? styles.line3 : ""}`}></div>
                    </div>

                    <div className={`${active ? styles.active : ""} ${styles.menu} fixed w-screen h-screen inset-0 bg-black`}>
                        <nav className="flex flex-col gap-8 text-lg">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>About</Link>
                            <Link href={"https://www.exsys.me/"} target="_blank">Contact</Link>
                        </nav>
                    </div>
                </div>

                {/** non-mobile navbar */}
                <div className="hidden sm:flex">
                    <nav className="flex gap-10 text-lg">
                        <Link href={"/"} className="hover:text-slate-400">Home</Link>
                        <Link href={"/"} className="hover:text-slate-400">About</Link>
                        <Link href={"https://www.exsys.me/"} target="_blank" className="hover:text-slate-400">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}