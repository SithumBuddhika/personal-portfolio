import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Project } from "@/models/Project";
import { Profile } from "@/models/Profile";
import { Certification } from "@/models/Certification";

export async function GET() {
  await connectDB();

  // Profile (single doc)
  const existingProfile = await Profile.findOne({});
  if (!existingProfile) {
    await Profile.create({
      name: "Evren Shah",
      countryText: "Based in Sri Lanka",
      roles: ["Frontend Developer", "SE Undergraduate", "UI Engineer"],
      resumeUrl: "",
      email: "yourmail@gmail.com",
      phone: "1234567890",
    });
  }

  // Projects
  const pCount = await Project.countDocuments();
  if (pCount === 0) {
    await Project.insertMany([
      {
        order: 1,
        title: "Crypto Screener Application",
        description:
          "A clean crypto screener UI with real-time price data, filtering, and a fast responsive layout.",
        imageUrl: "/assets/project-1.png",
        liveUrl: "",
        repoUrl: "",
        featured: true,
      },
      {
        order: 2,
        title: "Euphoria - Ecommerce (Apparels) Website Template",
        description:
          "Modern ecommerce template with product grids, detail pages, and a smooth UX optimized for mobile.",
        imageUrl: "/assets/project-2.png",
        liveUrl: "",
        repoUrl: "",
        featured: true,
      },
      {
        order: 3,
        title: "Blog Website Template",
        description:
          "A minimal blog template with category browsing, featured posts, and readable typography.",
        imageUrl: "/assets/project-3.png",
        liveUrl: "",
        repoUrl: "",
        featured: true,
      },
    ]);
  }

  // Certifications
  const cCount = await Certification.countDocuments();
  if (cCount === 0) {
    await Certification.insertMany([
      {
        order: 1,
        title: "AWS Cloud Foundations",
        issuer: "AWS",
        description:
          "Covered core cloud concepts, AWS services, security fundamentals, and best practices.",
        imageUrl: "/assets/cert-1.png",
        credentialUrl: "",
        issuedDate: "2025",
        featured: true,
      },
      {
        order: 2,
        title: "Google Data Analytics",
        issuer: "Google",
        description:
          "Learned data cleaning, analysis, visualization, and reporting using industry workflows.",
        imageUrl: "/assets/cert-2.png",
        credentialUrl: "",
        issuedDate: "2025",
        featured: true,
      },
      {
        order: 3,
        title: "Meta Front-End Development",
        issuer: "Meta",
        description:
          "Built responsive UIs, React components, and modern frontend architecture patterns.",
        imageUrl: "/assets/cert-3.png",
        credentialUrl: "",
        issuedDate: "2025",
        featured: true,
      },
    ]);
  }

  return NextResponse.json({
    ok: true,
    message: "Seeded profile + projects + certifications (if empty)",
  });
}
