import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { ParticleBackground } from "@/components/layout/ParticleBackground";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Internship } from "@/components/sections/Internship";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Hobbies } from "@/components/sections/Hobbies";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Karthikeyan E V — CSE Undergraduate & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Karthikeyan E V — Computer Science Engineering undergraduate, full-stack developer, and Flutter enthusiast. Projects, skills, internship and contact.",
      },
      { property: "og:title", content: "Karthikeyan E V — Portfolio" },
      {
        property: "og:description",
        content: "CSE undergraduate building full-stack web and mobile experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Karthikeyan E V",
          jobTitle: "Computer Science Engineering Undergraduate",
          alumniOf: "Sri Sivasubramaniya Nadar College of Engineering",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Education />
        <Achievements />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
