import React from "react";
import MealCard from "./MealCard";

export default function MenuList({ menu, addOrder }) {
  const sortedEntries = Object.entries(menu).sort(([aName, aMeal], [bName, bMeal]) => {
    const aCustom = aMeal.type === 'custom';
    const bCustom = bMeal.type === 'custom';
    if (aCustom !== bCustom) return aCustom ? 1 : -1;
    return aName.localeCompare(bName);
  });

  return (
    <div className="grid gap-4">
      {sortedEntries.map(([name, meal]) => (
        <MealCard key={name} name={name} meal={meal} addOrder={addOrder} />
      ))}
    </div>
  );
} 