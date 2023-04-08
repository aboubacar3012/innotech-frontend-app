import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import Banner from "@/components/banner";
import Statistic from "@/components/statistic";
import Courses from "@/components/courses";
import Plans from "@/components/plans";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import BecomePro from "@/components/become-pro";
import BasicSpeedDial from "@/components/speed-dial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil | Innotech Academy</title>
        <meta
          name="description"
          content="Apprenez à créer des applications web et mobiles de qualité professionnelle"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicSpeedDial />
      <div className="section">
        <div className="center">
          <Header />
          <Banner />
          <Statistic />
          <BecomePro />
        </div>
      </div>
      <main className="main">
        <div className="center">
          <Courses />
          <Plans />
        </div>
      </main>
      <CallToAction />
      <Footer />
    </>
  );
}
