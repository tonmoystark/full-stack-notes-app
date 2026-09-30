import { Trash2, Pencil } from "lucide-react";

const NoteCard = ({ title, content, time, id, allNotesFunc }) => {
  const deleteNote = async (id) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        allNotesFunc();
      }
    } catch (error) {
      console.log("can not delete the note " + error);
    }
  };
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-bold line-clamp-1">{title}</h2>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="rounded-lg p-2  transition hover:bg-slate-100 hover:text-blue-600"
            title="Edit note"
          >
            <Pencil size={18} />
          </button>

          <button
            type="button"
            className="rounded-lg p-2 transition hover:bg-red-50 hover:text-red-600"
            title="Delete note"
            onClick={() => deleteNote(id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="mt-3 line-clamp-4 text-sm leading-6 min-h-20">{content}</p>
      <div className=" border-t border-slate-100 pt-3">
        <span className="text-xs ">{time}</span>
      </div>
    </>
  );
};

export default NoteCard;
