import styles from "./css/actionpage.module.css";

export default function ActionPage() {
    return (
        <div className={`h-fit font-poppins text-main-light-text-1 mt-20`}>
            <div className={`h-full relative ${styles["triangle-down"]} py-20`}>
                <div className="h-full flex flex-col items-center justify-center text-center max-w-[96%] mx-auto md:pb-20">
                    <h1 className="text-4xl font-semibold mb-6">Trusted by creators Worldwide</h1>
                    <h2 className="text-[#636366] text-lg mb-20">Lorem ipsum dolor sit amet consect adipisicing possimus</h2>
                    <div className="flex flex-col md:flex-row gap-1 lg:w-full 2xl:w-3/4 mb-20">
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8 rounded-t-2xl
                        md:rounded-l-2xl md:!rounded-tr-none">
                            <div className="text-3xl font-semibold tracking-wider">8000+</div>
                            <div className="text-[#636366] text-xl">Companies on the platform</div>
                        </div>
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8">
                            <div className="text-3xl font-semibold tracking-wider">1%</div>
                            <div className="text-[#636366] text-xl">Flat platform fee</div>
                        </div>
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8">
                            <div className="text-3xl font-semibold tracking-wider">99.9%</div>
                            <div className="text-[#636366] text-xl">Profit guarantee</div>
                        </div>
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8 rounded-b-2xl
                        md:rounded-r-2xl md:rounded-bl-none">
                            <div className="text-3xl font-semibold tracking-wider">$70M+</div>
                            <div className="text-[#636366] text-xl">Total revenue generated</div>
                        </div>
                    </div>
                    <button className="py-3 px-10 bg-main-secondary rounded-lg hover:bg-main-secondary/70
                    text-white">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="h-1/2 bg-main-primary"></div>
        </div>
    )
}