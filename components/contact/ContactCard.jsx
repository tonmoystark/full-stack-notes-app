import React from "react";

const ContactCard = ({ name, email, message, status }) => {
  const isResolved = status?.toLowerCase() === "resolved";

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:border-slate-700">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600/15 text-lg font-bold text-green-400">
            {name?.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-white">
              {name}
            </h2>
            <p className="break-all text-sm text-slate-400">{email}</p>
          </div>
        </div>

        {/* Status */}
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold capitalize ${
            isResolved
              ? "border-green-500/20 bg-green-500/10 text-green-400"
              : "border-amber-500/20 bg-amber-500/10 text-amber-400"
          }`}
        >
          {status || "Pending"}
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-slate-800" />

      {/* Message */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Message
        </h3>

        <p className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-300">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
