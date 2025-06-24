import React from "react";

function formatOrder(order) {
  let base = `${order.qty} x ${order.name}`;
  if (order.custom) {
    if (order.custom.details) {
      base += ` (${order.custom.details})`;
    } else {
      base +=
        " (" +
        Object.entries(order.custom)
          .map(([k, v]) => `${k}: ${v}`)
          .join(", ") +
        ")";
    }
  }
  return base;
}

export default function OrderSummary({
  orders,
  updateOrder,
  removeOrder,
  clearOrders,
}) {
  const handleCopy = async () => {
    const text = orders.map(formatOrder).join("\n");
    await navigator.clipboard.writeText(text);
    alert("Orders copied to clipboard!");
  };

  if (orders.length === 0) return null;

  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h3 className="font-bold mb-2">Your Orders</h3>
      <ul>
        {orders.map((order, i) => (
          <li key={i} className="flex items-center gap-2 mb-1">
            <span className="flex-1">{formatOrder(order)}</span>
            <input
              type="number"
              min={1}
              value={order.qty}
              className="w-12 border rounded p-1"
              onChange={(e) =>
                updateOrder(i, { ...order, qty: Number(e.target.value) })
              }
            />
            <button
              className="text-red-500"
              onClick={() => removeOrder(i)}
              title="Remove"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        <button
          className="flex-1 bg-green-600 text-white px-3 py-1 rounded"
          onClick={handleCopy}
        >
          Copy Orders
        </button>
        <button
          className="flex-1 bg-gray-300 px-3 py-1 rounded"
          onClick={clearOrders}
        >
          Clear All
        </button>
      </div>
    </div>
  );
} 