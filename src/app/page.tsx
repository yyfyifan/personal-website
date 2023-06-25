import Image from "next/image";
import { Navbar, Hero, About, Experience, Footer, SocialIcons } from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Footer />

      {/* Floating gadgets */}
      <SocialIcons />
      {/* <DarkModeSwitcher /> */}
    </main>
  );
}
