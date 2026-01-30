import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react"; // ✅ add Github

type Project = {
  _id?: string;
  order: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="sectionBlack workWrap">
      <div className="container">
        {/* ✅ Header */}
        <div
          className="
            mb-8
            grid
            grid-cols-[1fr_auto_1fr]
            items-center
            gap-4
            max-[980px]:grid-cols-1
            max-[980px]:justify-items-center
          "
        >
          <div className="max-[980px]:hidden" />

          <h2
            className="sectionTitle"
            style={{ margin: 0, textAlign: "center" }}
          >
            My <span>Recent Projects</span>
          </h2>

          <div className="justify-self-end max-[980px]:justify-self-center">
            <Link
              href="/projects"
              style={{
                height: 44,
                padding: "0 16px",
                borderRadius: 12,
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 800,
                fontSize: 14,
                textDecoration: "none",
                whiteSpace: "nowrap",
                lineHeight: 1,
              }}
            >
              View All <span style={{ fontSize: 18, lineHeight: 0 }}>↗</span>
            </Link>
          </div>
        </div>

        <div className="workList">
          {projects.map((p, idx) => (
            <div
              key={p._id || String(p.order)}
              className={`workRow ${idx % 2 ? "reverse" : ""}`}
            >
              <div className="workMedia">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  width={1400}
                  height={900}
                  className="workImg"
                />
              </div>

              <div>
                <div className="workNum">
                  {String(p.order).padStart(2, "0")}
                </div>
                <div className="workH">{p.title}</div>
                <p className="workP">{p.description}</p>

                {/* ✅ Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                    marginTop: 18,
                  }}
                >
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontWeight: 800,
                        textDecoration: "none",
                        color: "#fff",
                        padding: "10px 14px",
                        borderRadius: 14,
                        border: "1.5px solid rgba(255,255,255,0.28)",
                        width: "fit-content",
                      }}
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  ) : null}

                  {p.repoUrl ? (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontWeight: 800,
                        textDecoration: "none",
                        color: "#fff",
                        padding: "10px 14px",
                        borderRadius: 14,
                        border: "1.5px solid rgba(255,255,255,0.28)",
                        width: "fit-content",
                      }}
                    >
                      <Github size={18} /> Repo {/* ✅ THIS is the fix */}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
