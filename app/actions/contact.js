"use server";

import { connectDB } from "@/lib/db";
import { contactModel } from "@/lib/models/contact.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function contactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Name, email and message are required",
    };
  }
  try {
    await connectDB();

    await contactModel.create({ name, email, message });
    console.log("contact form submitted by ");
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
  redirect("/");
}
