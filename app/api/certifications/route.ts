import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Certification } from "@/models/Certification";

export async function GET() {
  try {
    await connectDB();
    const items = await Certification.find({ featured: true })
      .sort({ order: 1 })
      .lean();
    return NextResponse.json({ certifications: items });
  } catch {
    return NextResponse.json({ certifications: [] }, { status: 200 });
  }
}
