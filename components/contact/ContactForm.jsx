"use client";
import Form from "next/form";
import React from "react";

const ContactForm = ({ action }) => {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl sm:p-10">
          {/* Header */}
          <div className="mb-8">
            <span className="mb-3 inline-block rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-green-400">
              GET IN TOUCH
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's talk.
            </h1>

            <p className="mt-3 leading-relaxed text-slate-400">
              Have a question, an idea, or a project in mind? Send me a message
              and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <Form action={action} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-300"
              >
                Your name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-300"
              >
                Email address
              </label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300"
              >
                Your message
              </label>

              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Tell me a little about what you have in mind..."
                required
                className="w-full resize-y rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-500 active:scale-[0.98]"
            >
              Send Message
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="text-center text-xs text-slate-500">
              Your message is important to me. Thanks for reaching out!
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
