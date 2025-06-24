import React from "react";
import MealCard from "./MealCard";

export default function MenuList({ menu, addOrder }) {
  return (
    <div className="grid gap-4">
      {Object.entries(menu).map(([name, meal]) => (
        <MealCard key={name} name={name} meal={meal} addOrder={addOrder} />
      ))}
    </div>
  );
} 