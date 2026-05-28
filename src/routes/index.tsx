import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/axis/Nav";
import { Hero } from "@/components/axis/Hero";
import { Dashboard } from "@/components/axis/Dashboard";
import { Tables } from "@/components/axis/Tables";
import { QuantumBox } from "@/components/axis/QuantumBox";
import { Radionic } from "@/components/axis/Radionic";
import { Biometric } from "@/components/axis/Biometric";
import { Telemetry } from "@/components/axis/Telemetry";
import { AI } from "@/components/axis/AI";
import { Footer } from "@/components/axis/Footer";
import { Particles } from "@/components/axis/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXIS™ CORE — Multidimensional Operating System" },
      { name: "description", content: "Núcleo operacional quântico multidimensional. Inteligência vibracional viva, sincronizada em tempo real." },
      { property: "og:title", content: "AXIS™ CORE — Multidimensional Operating System" },
      { property: "og:description", content: "Núcleo operacional quântico multidimensional. Inteligência vibracional viva, sincronizada em tempo real." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles count={36} />
      <Nav />
      <main className="relative z-10 pt-14">
        <Hero />
        <Dashboard />
        <Tables />
        <QuantumBox />
        <Radionic />
        <Biometric />
        <Telemetry />
        <AI />
        <Footer />
      </main>
    </div>
  );
}
