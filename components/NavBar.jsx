import { Notebook, PanelRightInactiveIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-800 transition hover:text-green-600"
        >
          <Notebook size={24} className="text-green-600" />
          <span>Practice App</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-green-600"
          >
            Home
          </Link>
          <Link
            href="/createNote"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 hover:shadow-md"
          >
            Create Note
          </Link>
          <Link
            href="/createProfile"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            Create Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
