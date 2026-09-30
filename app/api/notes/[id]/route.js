import { connectDB } from "@/lib/db";
import { noteModel } from "@/lib/models/notes.model";

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;
  try {
    await noteModel.findByIdAndDelete(id);
    return Response.json(
      { message: "Note deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Dailed to delete the note" },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;

  const { title, content } = await req.json();
  try {
    const note = await noteModel.findByIdAndUpdate(
      id,
      { title, content },
      { returnDocument: "after" },
    );
    return Response.json(
      { message: "Note updated successfully", note },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Failed to update the note" },
      { status: 500 },
    );
  }
}
export async function GET(req, { params }) {
  await connectDB();
  const { id } = await params;

  try {
    const note = await noteModel.findById(id);
    if (!note) {
      return Response.json({
        message: "Note not found",
        success: false,
      });
    }
    return Response.json({
      message: "Got the note",
      success: true,
      note,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Could not get the note",
      success: false,
    });
  }
}
