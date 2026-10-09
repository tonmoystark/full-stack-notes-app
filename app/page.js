import NoteContainer from "@/components/notes/NoteContainer";
import ProfileContainer from "@/components/profiles/ProfileContainer";
import { connectDB } from "@/lib/db";
import localFont from "next/font/local";

const satoshi = localFont({ src: "../public/fonts/Satoshi-Variable.ttf" });

export default async function Home() {
  await connectDB();

  return (
    <div className="min-h-screen w-full flex bg-gray-900 text-white p-5">
      <div className=" w-full">
        <h1
          className={`text-3xl font-bold text-center my-10 ${satoshi.className}`}
        >
          Notes App
        </h1>
        <NoteContainer />
        <h1
          className={`text-3xl font-bold text-center my-10 ${satoshi.className}`}
        >
          Profiles App
        </h1>
        <ProfileContainer />
      </div>
    </div>
  );
}
