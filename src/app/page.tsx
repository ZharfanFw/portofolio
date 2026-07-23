"use client";

import { useState, useEffect } from "react";
import { DarkHourIntro } from "@/components/shared/dark-hour-intro";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { NavPill } from "@/components/shared/nav-pill";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has already seen the intro during this browser session
    const hasSeenIntro = sessionStorage.getItem("hasSeenDarkHourIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, []);

  const handleFinishIntro = () => {
    sessionStorage.setItem("hasSeenDarkHourIntro", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro === true && <DarkHourIntro onComplete={handleFinishIntro} />}
      {showIntro === false && (
        <>
          <ScrollProgress />
          <NavPill />
          <main className="flex-1 w-full relative z-10">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
