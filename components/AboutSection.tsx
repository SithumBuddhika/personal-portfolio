import Image from "next/image";

export default function AboutSection() {
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
                marginTop: 18,
                fontSize: 16,
                lineHeight: "30px",
                color: "rgba(0,0,0,0.65)",
                maxWidth: 620,
              }}
            >
              I’m a Software Engineering undergraduate at SLIIT who builds
              modern web applications with a strong focus on clean UI and
              practical features. I like working end-to-end—from planning and
              implementing backend functionality to delivering responsive,
              polished interfaces.
              <br />
              <br />
              I’m currently looking for internship or entry-level opportunities
              where I can learn from experienced engineers, contribute to real
              products, and keep improving as a full-stack developer.
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
