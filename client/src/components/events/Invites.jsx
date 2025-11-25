import React from "react";

export default function Invites({ invites }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-brown mb-6">Invites</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {invites.map((invite, idx) => (
          <div key={idx} className="bg-offwhite rounded-xl p-6 shadow flex items-center justify-between">
            <span className="text-lg text-brown">{invite.recipient}</span>
            <span className={`px-4 py-2 rounded font-bold text-base ${invite.sent ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
              {invite.sent ? "Sent" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
