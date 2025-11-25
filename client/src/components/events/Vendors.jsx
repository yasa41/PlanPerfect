import React from "react";

export default function Vendors({ vendors }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-brown mb-6">Vendor Management</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vendors.map((vendor, idx) => (
          <div key={idx} className="bg-offwhite rounded-xl p-6 shadow flex flex-col">
            <span className="text-xl font-bold text-brown mb-2">{vendor.name}</span>
            <span className="text-taupe mb-1">{vendor.type}</span>
            <span className="text-taupe">{vendor.contact}</span>
          </div>
        ))}
      </div>
    </>
  );
}
