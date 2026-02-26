import React, { useState } from "react";
import menuOptions from "./MenuOptions.js";
import MenuList from "./components/MenuList";
import OrderSummary from "./components/OrderSummary";

export default function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prev) => {
      const existingIndex = prev.findIndex(
        (o) => o.name === order.name && JSON.stringify(o.custom) === JSON.stringify(order.custom)
      );
      if (existingIndex !== -1) {
        return prev.map((o, i) =>
          i === existingIndex ? { ...o, qty: o.qty + order.qty } : o
        );
      }
      return [...prev, order];
    });
  };

  const updateOrder = (index, newOrder) => {
    setOrders((prev) =>
      prev.map((order, i) => (i === index ? newOrder : order))
    );
  };

  const removeOrder = (index) => {
    setOrders((prev) => prev.filter((_, i) => i !== index));
  };

  const clearOrders = () => setOrders([]);

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <h1 className="text-2xl font-bold text-center my-4">
        Cascades Pub Meal Order
      </h1>
      <MenuList menu={menuOptions} addOrder={addOrder} />
      <OrderSummary
        orders={orders}
        updateOrder={updateOrder}
        removeOrder={removeOrder}
        clearOrders={clearOrders}
      />
    </div>
  );
} 