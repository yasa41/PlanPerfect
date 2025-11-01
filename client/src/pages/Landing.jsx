import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100 font-sf-pro p-6">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 backdrop-blur bg-gray-900 bg-opacity-60 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-widest text-purple-400">
          Plan Perfect
        </h1>
        <div>
          <button className="px-5 py-2 border border-purple-400 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition font-semibold shadow-md">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-20 px-4">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 space-y-8"
        >
          <h2 className="text-6xl font-black leading-[1.1] bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Plan Your Events <br /> Like a Pro
          </h2>
          <p className="text-lg text-gray-400 max-w-md leading-relaxed font-light">
            A unified, sophisticated event planning platform with task lists,
            bulk invitations, automated RSVP tracking, budgets, and photos —
            all in one place.
          </p>
          <button className="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-purple-600 transition">
            Get Started Free
          </button>
        </motion.div>
        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 mt-14 md:mt-0"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-purple-600 ring-opacity-40">
            <img
              src="https://user-gen-media-assets.s3.amazonaws.com/gemini_images/86d68098-518e-4856-b7bf-9d730725390e.png"
              alt="Abstract Event Planning Illustration"
              className="w-full object-contain"
              style={{ height: "400px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 rounded-3xl" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto mt-32 px-4 py-16 bg-gray-900 bg-opacity-70 rounded-3xl shadow-inner backdrop-blur-lg">
        <h3 className="text-center text-purple-300 text-4xl font-bold mb-16 tracking-wide">
          All-in-One Features That Elevate Your Event
        </h3>
        <div className="grid gap-16 md:grid-cols-3 text-center">
          {[
            {
              icon: "https://img.icons8.com/fluency-systems-filled/96/8e44ad/checklist.png",
              title: "Smart Task Lists",
              desc: "Organize every step with customizable, intelligent to-do lists tailored for your event.",
            },
            {
              icon: "https://img.icons8.com/fluency-systems-filled/96/8e44ad/new-post.png",
              title: "Bulk Invitations",
              desc: "Send beautifully personalized invites and track RSVPs automatically with ease.",
            },
            {
              icon: "https://img.icons8.com/fluency-systems-filled/96/8e44ad/money-bag.png",
              title: "Budget & Vendors",
              desc: "Manage expenses and vendors efficiently with clear, transparent tracking.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-700/30 to-purple-900/40 shadow-lg"
            >
              <img src={icon} alt={title} className="mx-auto mb-6" />
              <h4 className="text-2xl font-semibold mb-3 text-purple-300">{title}</h4>
              <p className="text-gray-300 font-light">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-3xl mx-auto mt-32 px-6 py-16 text-center rounded-3xl bg-gradient-to-tr from-purple-700 to-pink-600 shadow-2xl text-white">
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-8 leading-tight"
        >
          Ready to Plan Perfectly?
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-purple-700 font-bold rounded-full px-12 py-4 drop-shadow-lg hover:drop-shadow-xl transition"
        >
          Create Your Account
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 py-8 text-center text-gray-500 font-light tracking-wide">
        &copy; 2025 Plan Perfect. Crafted with &hearts; by Your Team.
      </footer>
    </div>
  );
};

export default LandingPage;
