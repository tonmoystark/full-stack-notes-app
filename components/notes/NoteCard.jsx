import { Trash2, Pencil } from "lucide-react";

const NoteCard = ({ title, content }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-800 line-clamp-1">
          {title}
        </h2>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
            title="Edit note"
          >
            <Pencil size={18} />
          </button>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
            title="Delete note"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
        {content}
      </p>
      <div className="mt-5 border-t border-slate-100 pt-3">
        <span className="text-xs text-slate-400">Just now</span>
      </div>
    </div>
  );
};

export default NoteCard;
