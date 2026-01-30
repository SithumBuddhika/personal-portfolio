import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  _id?: any;
  order: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
};

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const btnStyle = {
    marginTop: 16,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 800,
    textDecoration: "none",
    color: "inherit", // ✅ becomes white automatically on dark pages
    padding: "10px 12px",
    borderRadius: 12,
    border: "1.5px solid rgba(255,255,255,0.22)", // ✅ visible on dark
    width: "fit-content" as const,
    lineHeight: 1,
  };

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1
          style={{
            fontSize: 44,
            fontWeight: 900,
            textAlign: "center",
            marginBottom: 60,
            color: "inherit",
          }}
        >
          My Projects
        </h1>

        <div style={{ display: "grid", gap: 40 }}>
          {projects.map((p, idx) => (
            <div key={p._id?.toString?.() || p.order || idx}>
              {/* ✅ Desktop row */}
              <div
                className="projectsRowDesktop"
                style={{
                  display: "grid",
                  gridTemplateColumns: "420px 1fr",
                  gap: 32,
                  alignItems: "center",
                }}
              >
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  width={800}
                  height={520}
                  style={{
                    borderRadius: 18,
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                />

                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, opacity: 0.7 }}>
                    {String(p.order).padStart(2, "0")}
                  </div>

                  <h2
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      marginTop: 6,
                      lineHeight: 1.2,
                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                      color: "inherit",
                    }}
                  >
                    {p.title}
                  </h2>

                  <p
                    style={{
                      marginTop: 12,
                      lineHeight: 1.7,
                      maxWidth: 560,
                      opacity: 0.75,
                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                    }}
                  >
                    {p.description}
                  </p>

                  {/* ✅ Live + Repo buttons */}
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={btnStyle}
                      >
                        <ExternalLink size={18} /> Live
                      </a>
                    ) : null}

                    {p.repoUrl ? (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={btnStyle}
                      >
                        <Github size={18} /> Repo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* ✅ Mobile row (stacked) */}
              <div className="projectsRowMobile" style={{ display: "none" }}>
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  width={800}
                  height={520}
                  style={{
                    borderRadius: 16,
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                />

                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, opacity: 0.7 }}>
                    {String(p.order).padStart(2, "0")}
                  </div>

                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 900,
                      marginTop: 6,
                      lineHeight: 1.25,
                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                      color: "inherit",
                    }}
                  >
                    {p.title}
                  </h2>

                  <p
                    style={{
                      marginTop: 10,
                      lineHeight: 1.65,
                      opacity: 0.75,
                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                    }}
                  >
                    {p.description}
                  </p>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={btnStyle}
                      >
                        <ExternalLink size={18} /> Live
                      </a>
                    ) : null}

                    {p.repoUrl ? (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={btnStyle}
                      >
                        <Github size={18} /> Repo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <style>{`
                @media (max-width: 980px) {
                  .projectsRowDesktop { display: none !important; }
                  .projectsRowMobile { display: block !important; }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
