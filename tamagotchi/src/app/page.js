"use client"; // Ensure client-side rendering for animations

import { motion } from "framer-motion";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-extrabold bf-black bg-clip-text mb-8">
        Your Tamagotchi
      </h1>{" "}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ProgressBar label="Happiness" value={80} color="bg-yellow-400" />

        <ProgressBar label="Health" value={90} color="bg-green-400" />

        <ProgressBar label="Hunger" value={50} color="bg-red-400" />
        {/* Animated Puffle */}
        <motion.img
          className="dark:invert"
          src="/puffle.svg"
          alt="Tamagotchi Puffle"
          width={180}
          height={38}
          animate={{
            scale: [1, 1.2, 1], // Pulse effect
            rotate: [0, 10, -10, 0], // Small rotation
          }}
          transition={{
            duration: 2, // 2 seconds for the full animation cycle
            repeat: Infinity, // Infinite loop
          }}
        />

        {/* Add other content below */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        This game is brought to you by Yash, Darin, Natalie and Da Hyun
      </footer>
    </div>
  );
}
