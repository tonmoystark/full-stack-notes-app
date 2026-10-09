"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";

const isometra = localFont({
  src: "../../public/fonts/Isometra-Regular.ttf",
});

const EditProfile = ({ id }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const router = useRouter();
  const getProfile = async () => {
    try {
      const res = await fetch(`/api/profiles/${id}`);
      const data = await res.json();
      setName(data.profile.name);
      setAge(data.profile.age);
      setOccupation(data.profile.occupation);
      setMessage(data.profile.message);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, [id]);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !age || !occupation || !message) {
      setInputMessage("Please fill all the inputs");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/profiles/${id}`, {
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ name, age, occupation, message }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1
              className={`text-3xl font-bold text-white ${isometra.className}`}
            >
              Edit Your Profile
            </h1>

            <p className="mt-2 text-slate-400">
              Update your personal information.
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
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age..."
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
                id="occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="e.g. Web Developer"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* About */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-300"
              >
                About You
              </label>

              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us something about yourself..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />

              {inputMessage && (
                <p className="text-sm text-red-500">{inputMessage}</p>
              )}
            </div>

            {/* Button */}
            <button
              disabled={loading}
              type="submit"
              className={`w-full rounded-lg bg-green-600 py-3 font-semibold text-white shadow-sm transition hover:bg-green-500 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${isometra.className}`}
            >
              {loading ? "Updating Profile..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
