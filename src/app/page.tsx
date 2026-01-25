import {
  Navigation,
  Hero,
  About,
  Ventures,
  Projects,
  Achievements,
  Expertise,
  Credentials,
  Testimonials,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Projects />
        <Achievements />
        <Expertise />
        <Credentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
