"use client";
import styles from "./css/heropage.module.css";

export default function HeroPage() {
    return (
        <div className={`h-3/4 bg-main-primary text-main-dark-text-1 pt-24 relative ${styles["triangle-down"]}`}>
            <div className="h-full flex flex-col justify-center items-center text-center w-[92%] mx-auto">
                <div className={`z-10`} data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                    <h1 className="text-7xl lg:text-[80px] tracking-[0.15em] md:tracking-[0.25em]
                    lg:tracking-[0.7em] mb-6 md:ml-8 drop-shadow-xl">
                        Icarus
                    </h1>
                    <h2 className="text-2xl tracking-widest font-poppins uppercase">
                        Analytics Agency
                    </h2>
                </div>
                <img src="/images/shapes.png" alt="" data-aos="fade-down" data-aos-duration="700" data-aos-delay="100"
                    className={`absolute top-40 w-[500px] md:w-[550px] lg:w-[600px] md:top-20 lg:top-16 z-0`} />
            </div>
        </div>
    )
}