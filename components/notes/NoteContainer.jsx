"use client";
import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { Key } from "lucide-react";

const NoteContainer = () => {
  const [notes, setNotes] = useState([]);
  async function allNotes() {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      setNotes(data.allNotes);
    } catch (error) {
      console.log(error + "can not fetch the notes");
    }
  }
  useEffect(() => {
    allNotes();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note._id} className="w-full border p-5">
            <NoteCard
              title={note.title}
              content={note.content}
              time={new Date(note.createdAt).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            />
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-slate-500">
          No notes found.
        </p>
      )}
    </div>
  );
};

export default NoteContainer;
