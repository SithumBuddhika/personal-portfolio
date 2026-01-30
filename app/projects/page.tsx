import Navbar from "@/components/Navbar";
import ProjectsList from "@/components/ProjectsList";
import Footer from "@/components/Footer";

import { connectDB } from "@/lib/db";
import { Profile } from "@/models/Profile";
import { Project } from "@/models/Project";

export default async function ProjectsPage() {
  await connectDB();

  const profile =
    (await Profile.findOne({}).lean()) || ({ resumeUrl: "" } as any);

  // ✅ make it plain JSON-safe
  const projects = await Project.find({}).sort({ order: 1 }).lean();
  const safeProjects = JSON.parse(JSON.stringify(projects));

  return (
    <main style={{ background: "#0b0b0b", minHeight: "100vh", color: "#fff" }}>
      <Navbar resumeUrl={profile?.resumeUrl} />
      <ProjectsList projects={safeProjects || []} />
      <Footer />
    </main>
  );
}
