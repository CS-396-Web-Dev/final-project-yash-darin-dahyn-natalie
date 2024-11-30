// components/HealthBar.js
import Button from "./Button";
import React, { useState, useEffect } from "react";

export default function HealthBar({ label, value, setIsDead }) {
  const [progress, setProgress] = useState(value);

  function care() {
    setProgress(Math.min(100, progress + 20));
  }

  function getColor() {
    if (progress >= 70) return "bg-green-500";
    if (progress >= 35) return "bg-green-700";
    if (progress >= 10) return "bg-green-900";
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
      <Button text="Take Care" onClick={care} />
    </div>
  );
}
