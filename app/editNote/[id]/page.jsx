import EditNote from "@/components/notes/EditNote";
import React from "react";

const editNote = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <EditNote id={id} />
    </div>
  );
};

export default editNote;
