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

export async function GET(req, { params }) {
  try {
    await connectDBforProfile();
    const { id } = await params;
    const profile = await profileModel.findById(id);

    if (!profile) {
      return Response.json({
        message: "Profile not found",
        success: false,
      });
    }
    return Response.json(
      {
        message: "Got the profile",
        success: true,
        profile,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: "Could not get the profile",
        success: false,
      },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDBforProfile();
    const { id } = await params;

    const { name, age, occupation, message } = await req.json();

    const profile = await profileModel.findByIdAndUpdate(id, {
      name,
      age,
      occupation,
      message,
    });

    return Response.json(
      {
        message: "Profile updated successfully",
        profile,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: "Failed to update the profile",
      },
      { status: 500 },
    );
  }
}
