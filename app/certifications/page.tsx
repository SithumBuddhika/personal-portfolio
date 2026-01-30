import Navbar from "@/components/Navbar";
import CertificationsList from "@/components/CertificationsList";
import Footer from "@/components/Footer";

import { connectDB } from "@/lib/db";
import { Profile } from "@/models/Profile";
import { Certification } from "@/models/Certification";

export default async function CertificationsPage() {
  await connectDB();

  const profile =
    (await Profile.findOne({}).lean()) || ({ resumeUrl: "" } as any);

  // ✅ make it plain JSON-safe
  const certifications = await Certification.find({}).sort({ order: 1 }).lean();
  const safeCertifications = JSON.parse(JSON.stringify(certifications));

  return (
    <main style={{ background: "#0b0b0b", minHeight: "100vh", color: "#fff" }}>
      <Navbar resumeUrl={profile?.resumeUrl} />
      <CertificationsList certifications={safeCertifications || []} />
      <Footer />
    </main>
  );
}
