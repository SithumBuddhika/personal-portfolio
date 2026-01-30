import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Profile } from "@/models/Profile";

export async function GET() {
  try {
    await connectDB();

    // keep single profile doc
    const profile = await Profile.findOne({}).lean();

    // fallback (website still works even if DB empty)
    return NextResponse.json({
      profile: profile || {
        name: "Your Name",
        countryText: "Based in Sri Lanka",
        roles: ["Frontend Developer", "SE Undergraduate", "Next.js Developer"],
        resumeUrl: "",
        email: "yourmail@gmail.com",
        phone: "07XXXXXXXX",
      },
    });
  } catch {
    return NextResponse.json({
      profile: {
        name: "Your Name",
        countryText: "Based in Sri Lanka",
        roles: ["Frontend Developer", "SE Undergraduate", "Next.js Developer"],
        resumeUrl: "",
        email: "yourmail@gmail.com",
        phone: "07XXXXXXXX",
      },
    });
  }
}
