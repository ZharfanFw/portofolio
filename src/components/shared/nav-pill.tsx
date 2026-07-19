"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function NavPill() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Find the current active section
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Desktop Menu (>= 768px) */}
      <div className="hidden md:flex items-center gap-1 p-1 bg-paper-2/70 backdrop-blur-md border border-rule/50 rounded-full shadow-lg transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-1.5 text-xs uppercase tracking-wider rounded-full transition-all duration-200",
                isActive
                  ? "bg-accent text-accent-ink font-medium p3-glow-border"
                  : "text-ink-2 hover:text-ink hover:bg-paper-3/40"
              )}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Mobile Menu (< 768px) */}
      <div className="md:hidden flex flex-col items-center relative">
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 px-5 py-2.5 bg-paper-2/90 backdrop-blur-md border border-rule/50 rounded-full shadow-lg text-xs uppercase tracking-widest text-ink font-medium hover:border-accent/40 active:scale-95 transition-all z-50"
        >
          <span className="text-accent">●</span>
          <span>{navItems.find((n) => n.href === activeSection)?.label || "Menu"}</span>
          <svg
            className={cn("w-3.5 h-3.5 ml-1 transition-transform duration-300", isOpen && "rotate-180")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            {/* Backdrop click-outside interceptor */}
            <div 
              className="fixed inset-0 z-40 bg-transparent cursor-default"
              onClick={() => setIsOpen(false)}
            />
            {/* Dropdown Box */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-48 p-2 bg-paper-2/95 backdrop-blur-lg border border-rule rounded-2xl shadow-xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full px-4 py-2 text-xs uppercase tracking-wider rounded-xl text-center transition-all duration-200",
                      isActive
                        ? "bg-accent text-accent-ink font-semibold"
                        : "text-ink-2 hover:text-ink hover:bg-paper-3/50"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
