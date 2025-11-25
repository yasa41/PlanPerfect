import React from "react";

export default function Budget({ budgets }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-brown mb-6">Budget Overview</h3>
      <table className="w-full text-lg table-auto">
        <thead>
          <tr className="text-taupe font-semibold text-left bg-offwhite">
            <th className="pb-4">ITEM</th>
            <th className="pb-4">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget, idx) => (
            <tr key={idx} className="border-t text-brown">
              <td className="py-4">{budget.item}</td>
              <td className="py-4">{budget.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
