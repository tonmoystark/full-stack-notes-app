"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "profiles";
  return (
    <div className=" p-5">
      <h1 className="text-3xl">Dashboard</h1>
      <div className="flex gap-4 my-5">
        <Link
          className={tab === "profiles" ? "underline" : ""}
          href="/dashboard?tab=profiles"
        >
          Profiles
        </Link>
        <Link
          className={tab === "notes" ? "underline" : ""}
          href="/dashboard?tab=notes"
        >
          Notes
        </Link>
        <Link
          className={tab === "shops" ? "underline" : ""}
          href="/dashboard?tab=shops"
        >
          Shops
        </Link>
        <Link
          className={tab === "users" ? "underline" : ""}
          href="/dashboard?tab=users"
        >
          Users
        </Link>
      </div>
      {tab === "profiles" && <p>Showing all the profiles</p>}
      {tab === "notes" && <p>Showing all the notes</p>}
      {tab === "shops" && <p>Showing all the shops</p>}
      {tab === "users" && <p>Showing all the users</p>}
    </div>
  );
};

export default Dashboard;
