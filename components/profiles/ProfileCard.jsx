import React from "react";

const ProfileCard = ({ id, name, age, occupation, message, fetchProfiles }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/profiles/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchProfiles();
      }
    } catch (error) {
      console.log(error + "could not delete the profile");
    }
  };
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
          {name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <p className="text-sm text-slate-400">{occupation}</p>
        </div>
      </div>

      {/* Profile Information */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Age
          </p>
          <p className="mt-1 text-slate-200">{age} years old</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            About
          </p>
          <p className="mt-1 leading-relaxed text-slate-300">{message}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3 border-t border-slate-800 pt-5">
        <button
          type="button"
          className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 font-medium text-slate-200 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          type="button"
          className="flex-1 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-2.5 font-medium text-red-400 transition hover:bg-red-600 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
