import React from "react";
import bgImage from '/bg4.avif';

export default function SignIn() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-offwhite/5 backdrop-blur-sm"></div>
      <div className="flex flex-row w-[1200px] h-[650px] bg-offwhite rounded-[32px] shadow-2xl overflow-hidden relative z-10">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center px-16 py-8 text-brown font-sans">
          <div className="text-4xl font-bold mb-5 text-gold">EVENTS</div>
          <div className="text-6xl font-extrabold leading-none mb-7 text-brown">
            PLAN PERFECT<br />
            <span className="text-gold">MOMENTS</span>
          </div>
          <div className="text-xl mb-5 text-taupe">
            Where Your Celebrations Come to Life.
          </div>
          <div className="text-lg text-taupe">
            From birthdays to corporate gatherings — create unforgettable memories, effortlessly.
          </div>
        </div>
        {/* Right section */}
        <div className="flex-1 px-12 py-16 flex flex-col justify-center items-center my-16 mr-16">
          <form className="w-full">
            <label className="font-semibold mb-2 block text-taupe">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              required
              className="w-full p-4 mb-5 rounded-[10px] border border-taupe outline-none text-lg bg-offwhite text-brown"
            />
            <label className="font-semibold mb-2 block text-taupe">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-4 mb-5 rounded-[10px] border border-taupe outline-none text-lg bg-offwhite text-brown"
            />
            <label className="font-semibold mb-2 block text-taupe">Password</label>
            <input
              type="password"
              placeholder="************"
              required
              className="w-full p-4 mb-5 rounded-[10px] border border-taupe outline-none text-lg bg-offwhite text-brown"
            />
            <div className="text-right mb-5">
              <a href="#" className="text-gold text-base hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-brown text-offwhite font-bold text-xl rounded-[10px] cursor-pointer mb-6 hover:bg-taupe transition"
            >
              SIGN IN
            </button>
            <div className="flex items-center my-6 text-taupe w-full">
              <hr className="flex-1 border-t border-taupe" />
              <span className="mx-4 text-lg">or</span>
              <hr className="flex-1 border-t border-taupe" />
            </div>
            <div className="text-center text-base text-taupe">
              Are you new?{" "}
              <a href="#" className="text-gold underline hover:text-brown">
                Create an Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
