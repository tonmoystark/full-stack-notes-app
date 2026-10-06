import { connectDBforProfile } from "@/lib/db";
import { profileModel } from "@/lib/models/profiles.model";

export async function POST(req) {
  try {
    await connectDBforProfile();
    const { name, age, occupation, message } = await req.json();

    if (!name || !age || !occupation || !message) {
      return Response.json({
        message: "Need to fill all the inputs",
        success: false,
      });
    }

    const createdProfile = await profileModel.create({
      name,
      age,
      occupation,
      message,
    });

    return Response.json(
      {
        success: true,
        message: "profile created successfully",
        createdProfile,
      },
      { status: 201 },
    );
  } catch (error) {
    console.log(error + "profile creation failed");
    return Response.json(
      {
        message: "Profile creation failed",
        success: false,
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDBforProfile();
    const allProfiles = await profileModel.find().sort({ createdAt: -1 });
    return Response.json(
      {
        allProfiles,
        success: true,
        message: "Got all the profiles",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error + "falied to fetch all profiles data");
    return Response.json(
      {
        message: "Failed to fetch all profiles data",
        success: false,
      },
      { status: 500 },
    );
  }
}
