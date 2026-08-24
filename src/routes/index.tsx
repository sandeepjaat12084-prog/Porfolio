import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";

import { About } from "@/components/portfolio/about";
import { Coding } from "@/components/portfolio/coding";
import { Contact } from "@/components/portfolio/contact";
import { Education } from "@/components/portfolio/education";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";
import { Resume } from "@/components/portfolio/resume";
import { Skills } from "@/components/portfolio/skills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandeep Jaat | Computer Science & Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Sandeep Jaat, a Computer Science and Engineering student at NIT Jalandhar interested in software development, Data Structures & Algorithms, competitive programming, and full-stack development.",
      },
      { property: "og:title", content: "Sandeep Jaat | Computer Science & Engineering Student" },
      {
        property: "og:description",
        content:
          "Portfolio of Sandeep Jaat, a Computer Science and Engineering student at NIT Jalandhar interested in software development, Data Structures & Algorithms, competitive programming, and full-stack development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Sandeep Jaat | Computer Science & Engineering Student",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Sandeep Jaat, a Computer Science and Engineering student at NIT Jalandhar interested in software development, Data Structures & Algorithms, competitive programming, and full-stack development.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: "Sandeep Jaat",
            jobTitle: "Computer Science & Engineering Student",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
            },
            email: "mailto:sandeep.cs.25@nitj.ac.in",
            telephone: "+918769047804",
            sameAs: [
              "https://www.linkedin.com/in/sandeep-jaat-04a7043aa/",
              "https://github.com/sandeepjaat12084-prog",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Coding />
          <Projects />
          <Skills />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
