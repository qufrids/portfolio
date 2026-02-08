import {
  Navigation,
  Hero,
  Mission,
  Ventures,
  Projects,
  Timeline,
  Systems,
  Credentials,
  Trust,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Ventures />
        <Projects />
        <Timeline />
        <Systems />
        <Credentials />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
