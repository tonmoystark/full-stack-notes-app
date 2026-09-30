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
