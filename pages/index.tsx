import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainTitle } from "../components/MainTitle";
import { MintSection } from "../components/MintSection";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#130f40",
        backgroundImage: "linear-gradient(315deg, #130f40 0%, #000000 74%)",
      }}
      className="flex flex-col items-center justify-between text-t-secondary h-screen"
    >
      <Header />
      <main className="flex grid grid-cols-2 gap-12 max-w-screen-2xl items-center">
        <MainTitle />
        <MintSection />
      </main>
      <Footer />
    </div>
  );
}
