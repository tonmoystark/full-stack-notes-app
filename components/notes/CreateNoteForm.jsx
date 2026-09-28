"use client";
import React, { useState } from "react";

const CreateNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage("Please fill all the inputs");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("api/notes", {
        headers: {
          "content-type": "json/application",
        },
        method: "POST",
        body: JSON.stringify({ title, content }),
      });
      if (res.ok) {
        setMessage("Note created successfully");
        setTitle("");
        setContent("");
        console.log(title, content);
      }
    } catch (error) {
      console.log(error + "could not build the note");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Create a New Note
            </h1>
            <p className="text-slate-500 mt-2">
              Write down your thoughts, ideas, or anything you want to remember.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={submitHandler}>
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-semibold text-slate-700"
              >
                Title
              </label>

              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Enter note title..."
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col text-black gap-2">
              <label
                htmlFor="content"
                className="text-sm font-semibold text-slate-700"
              >
                Content
              </label>

              <textarea
                name="content"
                id="content"
                rows="8"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note here..."
                className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
              ></textarea>
              {message}
            </div>

            {/* Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md active:scale-[0.98]"
            >
              Create Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNoteForm;
