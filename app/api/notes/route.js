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

export async function GET() {
  try {
    await connectDB();

    const allNotes = await noteModel.find().sort({ createdAt: -1 });

    return Response.json(
      {
        allNotes,
        success: true,
        message: "Got all the notes",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Could not get the notes",
      },
      {
        status: 500,
      },
    );
  }
}

