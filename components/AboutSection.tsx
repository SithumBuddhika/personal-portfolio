import Image from "next/image";

const defaultAboutText1 = `I’m a Software Engineering undergraduate at SLIIT with hands-on experience building modern web applications and working across the full development lifecycle. I enjoy working end-to-end—from planning and backend development to creating responsive, polished interfaces—with a strong focus on clean code, practical features, and maintainable solutions.`;

const defaultAboutText2 = `Alongside development, I’m currently gaining industry experience in a Software Engineering Team Lead Intern role, where I’m strengthening my technical leadership, collaboration, and project coordination skills. I’m always looking to learn from experienced engineers, contribute to meaningful products, and continue growing as a full-stack software engineer.`;

export default function AboutSection({
  aboutText1,
  aboutText2,
}: {
  aboutText1?: string;
  aboutText2?: string;
}) {
  const p1 = aboutText1 || defaultAboutText1;
  const p2 = aboutText2 || defaultAboutText2;

  return (
    <section id="about" className="aboutWrap">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "460px 1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* LEFT IMAGE (no crop) */}
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.12)",
              background: "#fff",
            }}
          >
            <Image
              src="/assets/WhatsApp Image 2025-03-05 at 19.12.59_15b1c51d.jpg"
              alt="About"
              width={900}
              height={1100}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>

          {/* RIGHT TEXT */}
          <div style={{ paddingTop: 6 }}>
            <h2
              style={{
                margin: 0,
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "-0.6px",
                lineHeight: 1.05,
              }}
            >
              About Me
            </h2>

            <p
              style={{
                marginTop: 24,
                fontSize: 16,
                lineHeight: "30px",
                color: "rgba(0,0,0,0.65)",
                maxWidth: 620,
              }}
            >
              {p1}
            </p>

            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: "30px",
                color: "rgba(0,0,0,0.65)",
                maxWidth: 620,
              }}
            >
              {p2}
            </p>
          </div>
        </div>
      </div>

      {/* mobile */}
      <style>{`
        @media (max-width: 980px){
          #about .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
