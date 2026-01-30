import Image from "next/image";
import Navbar from "@/components/Navbar";
import RoleTicker from "@/components/RoleTicker";
import SkillGrid from "@/components/SkillGrid";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import { connectDB } from "@/lib/db";
import { Profile } from "@/models/Profile";
import { Project } from "@/models/Project";
import { Certification } from "@/models/Certification";

export default async function Page() {
  await connectDB();

  const profile =
    (await Profile.findOne({}).lean()) ||
    ({
      name: "Sithum Biddhika Jayalal",
      countryText: "Sri Lanka",
      roles: ["Developer", "SE Undergraduate"],
      resumeUrl: "",
      email: "Officialsithumbuddhika@gmail.com",
      phone: "+94768863678",
    } as any);

  const projects = await Project.find({ featured: true })
    .sort({ order: 1 })
    .limit(3)
    .lean();

  const certifications = await Certification.find({ featured: true })
    .sort({ order: 1 })
    .limit(3)
    .lean();

  return (
    <main id="home">
      <Navbar resumeUrl={profile?.resumeUrl} />

      {/* HERO (WHITE) */}
      <section className="heroWrap">
        <div className="container">
          <div className="heroGrid">
            {/* left */}
            <div>
              <h1 className="heroTitle">
                Hello I’am <span className="heroBold">{profile?.name}</span>.
                <br />
                <span className="heroRole">
                  <RoleTicker roles={profile?.roles || ["Developer"]} />
                </span>
                <br />
                <span className="heroBased">Based in</span>{" "}
                <span className="heroBold">
                  {profile?.countryText || "Sri Lanka"}
                </span>
              </h1>

              <p className="heroDesc">
                Software Engineering undergraduate at SLIIT building full-stack
                web applications with React, Node.js, Express, and MongoDB. I
                care about clean architecture, smooth UX, and shipping practical
                features.
              </p>

              {/* socials */}
              <div className="socialRow">
                <a
                  href="https://github.com/SithumBuddhika"
                  aria-label="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <Image
                    src="/assets/social-github.png"
                    alt="Github"
                    width={56}
                    height={56}
                    priority
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/sithum-buddhika-jayalal-827860341"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <Image
                    src="/assets/social-linkedin.png"
                    alt="LinkedIn"
                    width={56}
                    height={56}
                    priority
                  />
                </a>

                <a
                  href="#"
                  aria-label="Discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <Image
                    src="/assets/social-discord.png"
                    alt="Discord"
                    width={56}
                    height={56}
                    priority
                  />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <Image
                    src="/assets/social-twitter.png"
                    alt="Twitter"
                    width={56}
                    height={56}
                    priority
                  />
                </a>
              </div>
            </div>

            {/* right */}
            <div className="heroArt">
              <Image
                src="/assets/hero-illustration.png"
                alt="hero"
                width={750}
                height={750}
                priority
                className="heroImg"
              />
            </div>
          </div>

          <div className="heroDivider" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <AboutSection />
      </section>

      {/* SKILLS */}
      <section id="skills" className="skillsWrap">
        <div className="container">
          <h2 className="skillsTitle">My Skills</h2>
          <SkillGrid />
        </div>
      </section>

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* PROJECTS */}
      <section id="projects">
        <ProjectsSection projects={(projects as any) || []} />
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <CertificationsSection certifications={(certifications as any) || []} />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactSection email={profile?.email} phone={profile?.phone} />
      </section>

      <Footer />
    </main>
  );
}
