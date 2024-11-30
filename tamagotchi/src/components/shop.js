"use client";

import Link from "next/link";
import { useState } from "react";

export default function Shop() {
  let items;
  let setItems;
  [items, setItems] = useState([1, 2, 3, 4]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Shop</h1>
      <div className="grid">
        {items.map((item, idx) => (
          <h1 key={idx}>{item}</h1>
        ))}
      </div>
      <Link href="/">Return</Link>
    </div>
  );
}
