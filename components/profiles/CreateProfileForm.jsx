"use client";
import React, { useState } from "react";

const CreateProfileForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {};
  return (
    <div className="min-h-screen bg-slate-950 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Create Your Profile
            </h1>
            <p className="text-slate-400 mt-2">
              Add your personal information to create your profile.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={submitHandler}>
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-300"
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:bg-slate-800 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Age */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="age"
                className="text-sm font-semibold text-slate-300"
              >
                Age
              </label>

              <input
                type="number"
                name="age"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age..."
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:bg-slate-800 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Occupation */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="occupation"
                className="text-sm font-semibold text-slate-300"
              >
                Occupation
              </label>

              <input
                type="text"
                name="occupation"
                id="occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="e.g. Web Developer"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:bg-slate-800 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-300"
              >
                About You
              </label>

              <textarea
                name="message"
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us something about yourself..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:bg-slate-800 focus:ring-2 focus:ring-green-500/20"
              ></textarea>

              {/* {statusMessage} */}
            </div>

            {/* Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white shadow-sm transition hover:bg-green-500 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating Profile..." : "Create Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfileForm;
