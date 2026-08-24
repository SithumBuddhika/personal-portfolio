import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Project } from "@/models/Project";
import { Profile } from "@/models/Profile";
import { Certification } from "@/models/Certification";
import { Experience } from "@/models/Experience";

export async function GET() {
  await connectDB();

  // Profile (single doc)
  const existingProfile = await Profile.findOne({});
  if (!existingProfile) {
    await Profile.create({
      name: "Sithum Buddhika Jayalal",
      countryText: "Sri Lanka",
      roles: ["SE Undergraduate", "Full-Stack Developer"],
      resumeUrl:
        "https://drive.google.com/uc?export=download&id=1IVXd3HeljQCl1hOiU7BksiWrUCJqFUF8",
      email: "officialsithumbuddhika@gmail.com",
      phone: "+94768863678",
      whatsapp: "+94763464078", // ✅ required
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

  // Experience
  const eCount = await Experience.countDocuments();
  if (eCount === 0) {
    await Experience.insertMany([
      {
        order: 1,
        company: "Gamage Recruiters (Pvt) Ltd",
        role: "Team Lead Intern – Software Engineering",
        logoUrl: "https://res.cloudinary.com/dhv53owoc/image/upload/v1787577339/portfolio/company_gamage_logo.svg",
        startDate: "July 2026",
        present: true,
        description:
          "Led a team of intern developers to design and implement robust full-stack applications. Assisted in optimizing database queries, improving API responses, and mentoring junior engineers.",
      },
      {
        order: 2,
        company: "Freelance / Open Source Contributor",
        role: "Full-Stack Developer",
        logoUrl: "https://res.cloudinary.com/dhv53owoc/image/upload/v1787577339/portfolio/company_gamage_logo.svg",
        startDate: "Jan 2025",
        endDate: "June 2026",
        present: false,
        description:
          "Designed and built custom web platforms for local businesses. Contributed to open-source React components and library optimizations.",
      },
    ]);
  }

  return NextResponse.json({
    ok: true,
    message: "Seeded profile + projects + certifications + experiences (if empty)",
  });
}
