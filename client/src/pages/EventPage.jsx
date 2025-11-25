import React, { useState } from "react";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import GuestList from "../components/events/GuestList.jsx";
import Vendors from "../components/events/Vendors.jsx";
import ToDoList from "../components/events/ToDoList.jsx";
import Budget from "../components/events/Budget.jsx";
import Invites from "../components/events/Invites.jsx";

// Dummy Data
const guestListData = [
  { name: "John Smith", status: "Attending", table: "5", notes: "Allergy: Peanuts" },
  { name: "Jane Doe", status: "Attending", table: "5", notes: "" },
  { name: "Michael Johnson", status: "Declined", table: "N/A", notes: "" },
  { name: "Emily Williams", status: "Pending", table: "-", notes: "Needs follow-up" },
  { name: "Priya Patel", status: "Attending", table: "3", notes: "" },
  { name: "Alex Chen", status: "Pending", table: "-", notes: "Vegetarian" },
];

const vendorsData = [
  { name: "Blossom Floral Co.", type: "Florist", contact: "flowers@blossom.com" },
  { name: "Sparkle Events", type: "Planner", contact: "hello@sparkleevents.com" },
  { name: "Cake Delights", type: "Bakery", contact: "orders@cakedelights.com" },
  { name: "SoundWave DJ", type: "DJ", contact: "dj@soundwave.com" },
];

const todosData = [
  { task: "Confirm Venue", status: "Done" },
  { task: "Send Invitations", status: "Pending" },
  { task: "Finalize Menu", status: "Pending" },
  { task: "Pay Vendor Deposits", status: "Done" },
];

const budgetsData = [
  { item: "Venue", amount: "₹20,000" },
  { item: "Caterer", amount: "₹12,000" },
  { item: "Florist", amount: "₹6,500" },
  { item: "DJ", amount: "₹7,200" },
  { item: "Bakery", amount: "₹3,800" },
];

const invitesData = [
  { recipient: "John Smith", sent: true },
  { recipient: "Jane Doe", sent: true },
  { recipient: "Michael Johnson", sent: false },
  { recipient: "Emily Williams", sent: false },
  { recipient: "Priya Patel", sent: true },
  { recipient: "Alex Chen", sent: false },
];

const tabs = ["Guest List", "Vendors", "ToDo List", "Budget", "Invites"];

export default function EventPage() {
  const [activeTab, setActiveTab] = useState("Guest List");

  return (
    <div className="bg-offwhite min-h-screen w-full font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-14 py-6 bg-offwhite border-b">
        <div className="text-2xl font-extrabold text-gold">PlanPerfect</div>
        <div className="flex gap-10 text-taupe font-medium text-lg">
          <a href="#" className="hover:text-brown transition">Events</a>
          <a href="#" className="hover:text-brown transition">Templates</a>
        </div>
        <button className="bg-brown px-5 py-2 rounded-lg text-offwhite font-semibold hover:bg-gold hover:text-brown transition">
          Create Event
        </button>
      </nav>
      {/* Banner & Event Info */}
      <div className="px-14 pt-8">
        <div className="overflow-hidden rounded-[40px] shadow-lg h-[320px]">
          <img
            src="https://i.pinimg.com/1200x/ea/ff/49/eaff49b04cf9f414bf9e6fffdc7e179b.jpg"
            alt="Event Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white rounded-[32px] shadow-lg px-12 py-8 mt-[-60px] relative flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-brown mb-4">Julia & Mark's Wedding</h2>
            <div className="flex space-x-8 text-taupe">
              <div className="flex items-center space-x-2 text-lg">
                <FaRegCalendarAlt className="text-gold" />
                <span className="font-semibold">October 26, 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <FaRegClock className="text-gold" />
                <span className="font-semibold">4:00 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <FaMapMarkerAlt className="text-gold" />
                <span className="font-semibold">The Grand Ballroom, Celebration City</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            <button className="bg-gold px-8 py-3 rounded-lg font-bold text-brown text-lg hover:bg-brown hover:text-offwhite transition">Edit Details</button>
            <button className="bg-white border-2 border-gold px-8 py-3 rounded-lg font-bold text-gold text-lg hover:bg-gold hover:text-offwhite transition">View Public Page</button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="max-w-6xl mx-auto mt-12 px-8">
        <div className="flex items-center border-b py-3 space-x-10 text-taupe font-semibold text-xl">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 ${
                activeTab === tab
                  ? "border-b-4 border-gold text-brown"
                  : "hover:text-brown"
              } transition font-sans`}
              style={{ minWidth: 120 }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl mt-6 mb-12 p-10 overflow-x-auto transition min-h-[320px]">
        {activeTab === "Guest List" && <GuestList guestList={guestListData} />}
        {activeTab === "Vendors" && <Vendors vendors={vendorsData} />}
        {activeTab === "ToDo List" && <ToDoList todos={todosData} />}
        {activeTab === "Budget" && <Budget budgets={budgetsData} />}
        {activeTab === "Invites" && <Invites invites={invitesData} />}
      </div>
    </div>
  );
}
