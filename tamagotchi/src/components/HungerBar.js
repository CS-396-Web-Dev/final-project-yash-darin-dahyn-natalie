// components/HungerBar.js
import Button from "./Button";
import React, { useEffect } from "react";

export default function HungerBar({
  label,
  progress,
  setProgress,
  setIsDead,
  setCurrency,
}) {
  const calculateReward = (H, baseReward = 50, penaltyRate = 2) => {
    let reward;
    if (H >= 80) {
      reward = -(H - 80) * penaltyRate;
    } else if (H <= 20) {
      reward = -(20 - H) * penaltyRate;
    } else {
      reward = baseReward;
    }
    return reward;
  };

  const feed = () => {
    const reward = calculateReward(progress);
    setProgress(Math.min(100, progress + 20));
    setCurrency((prev) => prev + reward);
  };

  function getColor() {
    if (progress >= 70) return "bg-red-300";
    if (progress >= 35) return "bg-red-400";
    if (progress >= 10) return "bg-red-800";
    return "bg-red-600";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress - 1);
      if (progress <= 0) {
        setIsDead(true);
      }
      if (setIsDead) {
        clearInterval(interval);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [progress, setIsDead]);

  return (
    <div className="w-full max-w-md mb-1 flex items-center space-x-4">
      <div className="flex-1">
        <p className="mb-2">{label}</p>
        <div className="w-full h-4 bg-gray-500 rounded-md overflow-hidden">
          <div
            className={`h-full ${getColor()}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button text="Feed" onClick={feed} />
    </div>
  );
}
