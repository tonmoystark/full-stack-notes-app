import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({
  id,
  name,
  age,
  occupation,
  message,
  fetchProfiles,
  createdAt,
}) => {
  const router = useRouter();
  const handleDelete = async (id) => {
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
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
      {/* Profile Header */}
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
            {name?.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-white">{name}</h2>

            <p className="mt-1 text-sm text-slate-400">{occupation}</p>
          </div>
        </div>

        {/* Profile Information */}
        <div className="mt-6 space-y-5">
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
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 bg-slate-950/40 px-6 py-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">Created</span>
          <span className="text-xs font-medium text-slate-400">
            {new Date(createdAt).toLocaleString()}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => router.push(`/editProfile/${id}`)}
            type="button"
            className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 font-medium text-slate-200 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(id)}
            type="button"
            className="flex-1 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-2.5 font-medium text-red-400 transition hover:bg-red-600 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
