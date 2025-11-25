import React from "react";

const events = [
  {
    title: "Annual Tech Conference 2024",
    image: "https://i.pinimg.com/736x/b7/fc/ee/b7fcee31699fe8ece9b3b1b49691b5a0.jpg", // use your image paths
  },
  {
    title: "Summer Music Festival",
    image: "https://i.pinimg.com/1200x/ea/ff/49/eaff49b04cf9f414bf9e6fffdc7e179b.jpg",
  },
  // Add more events here
];

export default function LandingPage() {
  return (
    <div className="bg-offwhite min-h-screen w-full">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-20 py-6 bg-offwhite shadow">
        <div className="text-3xl font-extrabold text-gold font-sans">PlanPerfect</div>
        <div className="flex gap-10 text-taupe font-medium text-lg">
          <a href="#" className="hover:text-brown transition">Your Events</a>
          <a href="#" className="hover:text-brown transition">Create Event</a>
        </div>
        <button className="bg-brown px-5 py-2 rounded-lg text-offwhite font-semibold hover:bg-gold hover:text-brown transition">
          Logout
        </button>
      </nav>

      {/* Event Cards */}
      <main className="px-20 pt-8">
        <h1 className="text-3xl font-bold text-brown mb-8">Your Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{minHeight: "240px", height: "300px"}}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <span
                className="absolute bottom-4 right-6 px-5 py-2 rounded-lg font-bold text-lg bg-brown/80 text-offwhite font-sans"
                style={{
                  letterSpacing: "0.03em",
                  backdropFilter: "blur(2px)",
                  boxShadow: "0 2px 8px rgba(70, 46, 23, 0.15)",
                }}
              >
                {event.title}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
