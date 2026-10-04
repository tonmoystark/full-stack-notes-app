import NoteContainer from "@/components/notes/NoteContainer";
import { connectDB } from "@/lib/db";

export default async function Home() {
  await connectDB();

  return (
    <div className="min-h-screen flex bg-gray-900 text-white p-5">
      <div className=" w-full">
        <h1 className="text-3xl font-bold text-center my-10">Notes App</h1>
        <NoteContainer />
        <h1 className="text-3xl font-bold text-center my-10">Profiles App</h1>
      </div>
    </div>
  );
}
