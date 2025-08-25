// src/app/page.tsx
"use client";

import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  // ✅ Force scroll to top on page load and disable scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  // Set active tab based on scroll position
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 300);

      const featuresPos = document.getElementById("features")?.offsetTop ?? 0;
      const contactPos = document.getElementById("contact")?.offsetTop ?? 0;
      const scrollPos = y + window.innerHeight / 3;

      if (scrollPos >= contactPos) setActiveTab("contact");
      else if (scrollPos >= featuresPos) setActiveTab("features");
      else setActiveTab("about");
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navbar visibility
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignInClick = async () => {
    // One-shot check (no subscription)
    const session = await getSession();
    if (session) router.push("/dashboard");
    else router.push("/sign-in");
  };

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-indigo-900 bg-opacity-95 text-white flex items-center justify-between px-6 h-16 transition-transform duration-300 ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Pokémon Tracker
        </div>

        <div className="flex space-x-8 font-semibold text-lg">
          {["about", "features", "contact"].map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer pb-1 border-b-4 ${
                activeTab === tab
                  ? "border-white text-white"
                  : "border-transparent text-white/70 hover:text-white"
              }`}
              onClick={() => scrollToSection(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        <button
          onClick={handleSignInClick}
          className="bg-white text-indigo-900 px-4 py-1 rounded font-semibold hover:bg-indigo-50 transition"
        >
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-700 text-white px-6 text-center relative"
        style={{ scrollSnapAlign: "start" }}
      >
        <h1 className="text-8xl sm:text-9xl font-extrabold max-w-5xl leading-tight drop-shadow-lg">
          Pokémon Card Tracker
        </h1>
        <p className="mt-6 text-xl sm:text-2xl max-w-2xl opacity-90">
          Track your favorite Pokémon cards with live prices and secure login.
        </p>

        <button
          onClick={() => scrollToSection("about")}
          className="mt-12 px-8 py-3 bg-white text-indigo-700 font-bold rounded shadow hover:bg-indigo-50 transition"
        >
          Learn More
        </button>

        {/* Bouncing Down Arrow */}
        <div
          className={`absolute bottom-10 flex justify-center transition-opacity duration-700 ${
            scrolled ? "opacity-0" : "opacity-100"
          } animate-bounce`}
        >
          <svg
            onClick={() => scrollToSection("about")}
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen max-w-4xl mx-auto px-6 py-20 scroll-mt-16">
        <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="text-lg leading-relaxed">
          Pokémon Card Tracker helps you keep track of your collection with real-time pricing and
          easy-to-use tools.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="min-h-screen max-w-4xl mx-auto px-6 py-20 scroll-mt-16">
        <h2 className="text-4xl font-bold mb-6">Features</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-3">
          <li>Search and add Pokémon cards to your collection.</li>
          <li>Track price changes over time with charts.</li>
          <li>Secure Google sign-in integration.</li>
          <li>Responsive and sleek user interface.</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen max-w-4xl mx-auto px-6 py-20 scroll-mt-16">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-lg leading-relaxed">
          Have questions? Reach out at{" "}
          <a href="mailto:support@pokemontacker.example" className="underline hover:text-indigo-600">
            support@pokemontacker.example
          </a>
          .
        </p>
      </section>
    </>
  );
}
