"use client";
import React, { useState } from "react";
import localFont from "next/font/local";

const isometra = localFont({
  src: "../../public/fonts/Isometra-Regular.ttf",
});

const CreateProfileForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [inputMessage, setinputMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (text) => {
    setinputMessage(text);
    setTimeout(() => {
      setinputMessage("");
    }, 3000);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !age || !occupation || !message) {
      showMessage("Please fill all the inputs");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/profiles", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name, age, occupation, message }),
      });
      if (res.ok) {
        showMessage("Profile created successfully");
        setName("");
        setAge("");
        setOccupation("");
        setMessage("");
        console.log(name, age, occupation, message);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error + "could not build the profile");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-fit w-full border border-green-800 bg-slate-950 p-6 flex items-center justify-center">
      <div className="w-full">
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1
              className={`text-3xl font-bold text-white ${isometra.className}`}
            >
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

              {inputMessage && <p className="text-red-500">{inputMessage}</p>}
            </div>

            {/* Button */}
            <button
              disabled={loading}
              type="submit"
              className={`w-full rounded-lg bg-green-600 py-3 font-semibold text-white shadow-sm transition hover:bg-green-500 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${isometra.className}`}
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
