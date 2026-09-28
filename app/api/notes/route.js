import { connectDB } from "@/lib/db";
import { noteModel } from "@/lib/models/notes.model";

export async function POST(request) {
  try {
    await connectDB();

    const { title, content } = await request.json();

    if (!title || !content) {
      return Response.json({
        message: "Need to fill all the inputs",
        success: false,
      });
    }
    const createdNote = await noteModel.create({
      title,
      content,
    });

    return Response.json({
      success: true,
      status: 201,
      message: "note created successfully",
      createdNote,
    });
  } catch (error) {
    console.log(error + "failed to create the note");
  }
}
