"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditNote = ({ id }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await fetch(`/api/notes/${id}`);
        const data = await res.json();

        setTitle(data.note.title);
        setContent(data.note.content);
      } catch (error) {
        console.log(error + "can not fetch the note");
      }
    }
    fetchNote();
  }, [id]);

  async function handleForm(e) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/notes/${id}`, {
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();

      if (res.ok) {
        router.back();
        console.log(data.message);
      }
    } catch (error) {
      console.log("could not update");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Edit Note</h1>

            <p className="mt-2 text-slate-500">
              Update your note and save your changes.
            </p>
          </div>

          <form onSubmit={handleForm} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-semibold text-slate-700"
              >
                Title
              </label>

              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                placeholder="Enter note title..."
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="content"
                className="text-sm font-semibold text-slate-700"
              >
                Content
              </label>

              <textarea
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="8"
                placeholder="Write your note here..."
                className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Save Changes
              </button>

              <button
                type="button"
                className="flex-1 rounded-lg border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                onClick={() => router.back()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
