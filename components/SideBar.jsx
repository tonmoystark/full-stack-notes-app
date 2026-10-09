"use client";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const SideBar = () => {
  const bars = [
    {
      name: "Home",
      href: "/",
    },
    { name: "dashboard", href: "/dashboard" },
    {
      name: "Shops",
      href: "/shops",
    },
    {
      name: "Create Notes",
      href: "/createNote",
    },
    {
      name: "Create Profile",
      href: "/createProfile",
    },
  ];

  const pathName = usePathname();
  return (
    <div
      className={`w-48 min-h-screen border-r border-slate-200 ${robotoMono.className}`}
    >
      <h1 className="text-2xl">SideBar</h1>
      {bars.map((bar) => (
        <div
          key={bar.name}
          className={`p-2 flex flex-col ${pathName === bar.href ? "bg-slate-200 text-black" : ""}`}
        >
          <Link href={bar.href}>{bar.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
