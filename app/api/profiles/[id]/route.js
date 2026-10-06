import { connectDBforProfile } from "@/lib/db";
import { profileModel } from "@/lib/models/profiles.model";

export async function DELETE(req, { params }) {
  await connectDBforProfile();
  const { id } = await params;
  try {
    await profileModel.findByIdAndDelete(id);
    return Response.json(
      { message: "Profile deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Dailed to delete the profile" },
      { status: 500 },
    );
  }
}
