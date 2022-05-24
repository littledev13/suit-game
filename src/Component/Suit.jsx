import React from "react";

export default function Suit() {
  return (
    <div className="text-6xl flex justify-center gap-14">
      <div className="w-24 h-24 bg-amber-500 rounded-md flex items-center justify-center group hover:bg-amber-200 transition-colors duration-500">
        <button className="group-hover:scale-125">✌</button>
      </div>
      <div className="w-24 h-24 bg-amber-500 rounded-md flex items-center justify-center group hover:bg-amber-200 transition-colors duration-500">
        <button className="group-hover:scale-125">👊</button>
      </div>
      <div className="w-24 h-24 bg-amber-500 rounded-md flex items-center justify-center group hover:bg-amber-200 transition-colors duration-500">
        <button className="group-hover:scale-125">🖐</button>
      </div>
    </div>
  );
}
