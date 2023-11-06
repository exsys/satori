import ActionPage from "@/components/actionpage";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroPage from "@/components/heropage";
import InfoPage from "@/components/infopage";

export default function Home() {
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
