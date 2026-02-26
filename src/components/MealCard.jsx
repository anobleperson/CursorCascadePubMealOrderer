import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function MealCard({ name, meal, addOrder }) {
  const [showModal, setShowModal] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const [custom, setCustom] = useState({});
  const [step, setStep] = useState(0);

  const handleOrder = () => {
    if (meal.type === "multi") {
      setShowModal(true);
      setStep(0);
      setCustom({});
    } else if (meal.type === "custom") {
      setShowModal(true);
      setStep(0);
      setCustom({});
    } else {
      addOrder({ name, custom: null, qty: 1 });
      setShowAdded(true);
    }
  };

  const handleCustomOrder = () => {
    addOrder({ name, custom, qty: 1 });
    setShowModal(false);
    setCustom({});
    setStep(0);
  };

  const handleOptionSelect = (variationName, option) => {
    setCustom((prev) => ({ ...prev, [variationName]: option }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  let modalContent = null;
  if (meal.type === "multi" && meal.variations.length > 0) {
    if (step < meal.variations.length) {
      const variation = meal.variations[step];
      modalContent = (
        <div>
          <h3 className="font-bold mb-2">Choose {variation.name}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {variation.options.map((opt) => (
              <button
                key={opt}
                className={`px-3 py-1 rounded border ${custom[variation.name] === opt ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={() => handleOptionSelect(variation.name, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button className="text-blue-600 underline" onClick={handleBack}>
              Back
            </button>
          )}
        </div>
      );
    } else {
      // All options selected
      modalContent = (
        <div>
          <h3 className="font-bold mb-2">Review Selection</h3>
          <ul className="mb-4">
            {meal.variations.map((v) => (
              <li key={v.name}>
                <span className="font-medium">{v.name}:</span> {custom[v.name]}
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <button
              className="flex-1 bg-blue-600 text-white px-3 py-1 rounded"
              onClick={handleCustomOrder}
            >
              Add
            </button>
            <button
              className="flex-1 bg-gray-300 px-3 py-1 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
          <button className="text-blue-600 underline mt-2" onClick={handleBack}>
            Back
          </button>
        </div>
      );
    }
  } else if (meal.type === "custom") {
    modalContent = (
      <div>
        <h3 className="font-bold mb-2">Custom Order</h3>
        <input
          className="w-full border rounded p-1 mb-4"
          placeholder={meal.placeholder}
          value={custom.details || ""}
          onChange={(e) => setCustom({ details: e.target.value })}
        />
        <div className="flex gap-2">
          <button
            className="flex-1 bg-blue-600 text-white px-3 py-1 rounded"
            onClick={handleCustomOrder}
            disabled={!custom.details}
          >
            Add
          </button>
          <button
            className="flex-1 bg-gray-300 px-3 py-1 rounded"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  const modal = (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow max-w-xs w-full border-2 border-blue-600">
        {modalContent}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{meal.description}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
        onClick={handleOrder}
      >
        Order
      </button>
      {showModal && ReactDOM.createPortal(modal, document.body)}
      {showAdded && ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow max-w-xs w-full border-2 border-blue-600 text-center">
            <h3 className="font-bold mb-3">{name} added!</h3>
            <button
              className="bg-blue-600 text-white px-6 py-1 rounded"
              onClick={() => setShowAdded(false)}
            >
              OK
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
} 