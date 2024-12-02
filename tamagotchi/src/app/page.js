"use client"; // Ensure client-side rendering for animations

import { motion } from "framer-motion";
import HungerBar from "@/components/HungerBar";
import HappinessBar from "@/components/HappinessBar";
import HealthBar from "@/components/HealthBar";
import Inventory from "@/components/Inventory";
import Shop from "@/components/Shop";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [isDead, setIsDead] = useState(false);
    const [startPage, setStartPage] = useState(true);
    const [currency, setCurrency] = useState(0);
    const [inventory, setInventory] = useState({});
    const [growthStage, setGrowthStage] = useState(0);
    const maxGrowthStage = 6;
    {
        /* Bar States */
    }
    const [happinessProgress, setHappinessProgress] = useState(100);
    const [healthProgress, setHealthProgress] = useState(100);
    const [hungerProgress, setHungerProgress] = useState(100);
    const barStates = {
        happiness: { state: happinessProgress, setState: setHappinessProgress },
        health: { state: healthProgress, setState: setHealthProgress },
        hunger: { state: hungerProgress, setState: setHungerProgress },
    };
    const handleStart = () => {
        setStartPage(false);
    };

    function handleRestart() {
        setIsDead(false);
        setStartPage(true);
        setGrowthStage(0);
        setCurrency(0);
        setHappinessProgress(100);
        setHealthProgress(100);
        setHungerProgress(100);
        setInventory({});
        localStorage.removeItem("gameState");
    }

    useEffect(() => {
        const interval = setInterval(
            () => {
                setGrowthStage((prevStage) =>
                    prevStage < maxGrowthStage ? prevStage + 1 : prevStage
                );
            },
            // 1 * 60 * 100
            5 * 60 * 1000
        );

        return () => clearInterval(interval);
    }, []);

    const sizeMultiplier = 1 + growthStage * 0.4;
    const width = 60 * sizeMultiplier;
    const height = 13 * sizeMultiplier;

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("gameState"));
        if (storedData) {
            setCurrency(storedData.currency);
            setInventory(storedData.inventory);
            setGrowthStage(storedData.growthStage);
            setHappinessProgress(storedData.happinessProgress);
            setHealthProgress(storedData.healthProgress);
            setHungerProgress(storedData.hungerProgress);
            setIsDead(storedData.isDead);
            setStartPage(storedData.startPage);
        }
    }, []);


    useEffect(() => {
        const gameState = {
            currency,
            inventory,
            growthStage,
            happinessProgress,
            healthProgress,
            hungerProgress,
            isDead,
            startPage,
        };
        localStorage.setItem("gameState", JSON.stringify(gameState));
    }, [currency, inventory, growthStage, happinessProgress, healthProgress, hungerProgress, isDead, startPage]);

    return (
        <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl font-extrabold text-center bf-black bg-clip-text mb-8">
                Your Tamagotchi
            </h1>{" "}
            {startPage && (
                <div className="flex flex-col items-center">
                    <p className="mb-6 text-xl font-semibold">
                        Welcome to Tamagotchi!
                    </p>
                    <button
                        className="mt-6 px-6 py-3 bg-red-400 font-bold text-white rounded"
                        onClick={handleStart}
                    >
                        Start Game
                    </button>
                </div>
            )}
            {!startPage && !isDead && (
                <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-[1200px] mx-auto">
                    <div className="flex items-center justify-center w-full text-2xl font-bold text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md shadow-lg p-4">
                        ${currency}
                    </div>

                    <HealthBar
                        label="Health"
                        progress={healthProgress}
                        setProgress={setHealthProgress}
                        setIsDead={setIsDead}
                        setCurrency={setCurrency}
                    />

                    <HungerBar
                        label="Hunger"
                        progress={hungerProgress}
                        setProgress={setHungerProgress}
                        setIsDead={setIsDead}
                        setCurrency={setCurrency}
                    />

                    <HappinessBar
                        label="Happiness"
                        progress={happinessProgress}
                        setProgress={setHappinessProgress}
                        setIsDead={setIsDead}
                        setCurrency={setCurrency}
                    />

                    {/* Inventory */}
                    <Inventory
                        inventory={inventory}
                        setInventory={setInventory}
                        barStates={barStates}
                    />

                    {/* Animated Puffle */}

                    <motion.img
                        className="dark:invert mt-5"
                        src="/puffle.svg"
                        alt="Tamagotchi Puffle"
                        width={width}
                        height={height}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                    {/* Add other content below */}
                    <Shop
                        inventory={inventory}
                        setInventory={setInventory}
                        currency={currency}
                        setCurrency={setCurrency}
                    />
                </main>
            )}
            <footer className="p-16 row-start-3 flex gap-6 flex-wrap items-center justify-center">
                This game is brought to you by Yash, Darin, Natalie and Da Hyun
            </footer>
            {isDead && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg text-center">
                        <h2 className="text-xl font-bold mb-4">
                            Your Tamagotchi has died!
                        </h2>
                        <button
                            className="px-6 py-2 bg-red-500 text-white rounded"
                            onClick={handleRestart}
                        >
                            Restart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
