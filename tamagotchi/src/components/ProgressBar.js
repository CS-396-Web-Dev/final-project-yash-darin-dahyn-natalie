// components/ProgressBar.js
// "use client";
import React, { useState, useEffect } from 'react'

export default function ProgressBar({ label, value, color }) {
  return (
    <div className="w-full max-w-sm mb-1">
      <p className="mb-2">{label}</p>
      <div className="w-full h-4 bg-gray-500 rounded-md overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}
