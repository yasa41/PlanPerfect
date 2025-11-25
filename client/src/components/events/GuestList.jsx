import React from "react";

const statusColors = {
  Attending: "bg-green-200 text-green-800",
  Declined: "bg-red-200 text-red-800",
  Pending: "bg-yellow-200 text-yellow-800",
};

export default function GuestList({ guestList }) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-brown">Guest Management</h3>
        <div className="flex gap-2">
          <input className="border rounded-lg px-5 py-3 text-taupe w-64 text-lg" placeholder="Search guests..." />
          <button className="bg-gold text-brown font-bold px-6 py-3 rounded-lg text-lg hover:bg-brown hover:text-offwhite transition">+ Add Guest</button>
        </div>
      </div>
      <table className="w-full table-auto text-lg">
        <thead>
          <tr className="text-taupe font-semibold text-left bg-offwhite">
            <th className="pb-4">NAME</th>
            <th className="pb-4">STATUS</th>
            <th className="pb-4">TABLE #</th>
            <th className="pb-4">NOTES</th>
            <th className="pb-4">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map((guest, idx) => (
            <tr key={idx} className="border-t text-brown">
              <td className="py-4">{guest.name}</td>
              <td className="py-4">
                <span className={`px-4 py-2 rounded text-base font-bold ${statusColors[guest.status] || "bg-taupe text-white"}`}>
                  {guest.status}
                </span>
              </td>
              <td className="py-4">{guest.table}</td>
              <td className="py-4">{guest.notes || "-"}</td>
              <td className="py-4 text-right">
                <button className="text-gold hover:text-brown transition">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
