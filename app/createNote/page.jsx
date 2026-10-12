import CreateNoteForm from "@/components/notes/CreateNoteForm";
import React from "react";

export const metadata = {
  title: "Create Note",
  description: "Create Note",
};

const createNote = () => {
  return (
    <div>
      <CreateNoteForm />
    </div>
  );
};

export default createNote;
