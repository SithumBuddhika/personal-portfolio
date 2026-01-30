import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Project } from "@/models/Project";

export async function GET() {
  try {
    await connectDB();
    const items = await Project.find({ featured: true })
      .sort({ order: 1 })
      .lean();
    return NextResponse.json({ projects: items });
  } catch (e) {
    return NextResponse.json({ projects: [] }, { status: 200 });
  }
}
