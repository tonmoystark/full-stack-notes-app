import CreateNoteForm from "@/components/notes/CreateNoteForm";
import { connectDB } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  await connectDB();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white p-5">
      <div className="w-6xl min-h-screen border rounded-2xl">
        <h1 className="text-3xl font-bold text-center my-10">Notes App</h1>
        <CreateNoteForm />
      </div>
    </div>
  );
}
