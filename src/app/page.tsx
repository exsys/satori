"use client";
import ActionPage from "@/components/actionpage";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroPage from "@/components/heropage";
import InfoPage from "@/components/infopage";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <main className="h-full text-main-light-text-1 dark:text-main-dark-text-1">
      <Header />
      <HeroPage />
      <InfoPage />
      <ActionPage />
      <Footer />
    </main>
  )
}
