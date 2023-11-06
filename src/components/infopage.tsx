import localFont from 'next/font/local';
import styles from "./css/infopage.module.css";
const azonix = localFont({ src: "../assets/fonts/Azonix.otf" });

export default function InfoPage() {
    return (
        <div className="h-fit text-main-light-text-1 pt-44 font-poppins">
            <div className="w-3/4 mx-auto flex flex-col items-center justify-center mt-24">
                <h1 className="text-4xl font-semibold uppercase mb-16">
                    Title
                </h1>
                <div className="flex flex-col">
                    <div className="font-semibold text-xl text-center mb-6">
                        Prism - Clarity - Analytics - Ray - Reflection
                    </div>
                    <div className='mb-20 relative h-52'>
                        <div className={`${styles["pentagon"]} ${styles["ray"]}`}></div>
                        <div className={`${styles["pentagon"]} ${styles["reflection"]}`}></div>
                        <div className={`${styles["pentagon"]} ${styles["clarity"]}`}></div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src="/logos/logo-gray.png" width={120} alt="logo" className='mb-4' />
                        <h2 className={`${azonix.className} text-5xl md:text-6xl tracking-[0.5em] text-[#C3C3C7] ml-4`}>
                            Satori
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}