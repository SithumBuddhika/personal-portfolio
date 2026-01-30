import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type Cert = {
  _id?: string;
  order: number;
  title: string;
  description: string;
  imageUrl: string;
  credentialUrl?: string;
  issuer?: string;
  issuedDate?: string;
};

export default function CertificationsSection({
  certifications,
}: {
  certifications: Cert[];
}) {
  const linkBtnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 800,
    textDecoration: "none",
    color: "#fff",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1.5px solid rgba(255,255,255,0.18)",
    width: "fit-content",
    lineHeight: 1,
    background: "transparent",
  };

  return (
    <section className="sectionSoftBlack workWrap">
      <div className="container">
        {/* ✅ same header alignment style as projects */}
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
            My <span>Certifications</span>
          </h2>

          <div className="justify-self-end max-[980px]:justify-self-center">
            <Link
              href="/certifications"
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
          {certifications.map((c, idx) => (
            <div
              key={c._id || String(c.order)}
              className={`workRow ${idx % 2 ? "reverse" : ""}`}
            >
              <div className="workMedia">
                <Image
                  src={c.imageUrl}
                  alt={c.title}
                  width={1400}
                  height={900}
                  className="workImg"
                />
              </div>

              <div>
                <div className="workNum">
                  {String(c.order).padStart(2, "0")}
                </div>
                <div className="workH">{c.title}</div>

                {(c.issuer || c.issuedDate) && (
                  <div
                    style={{
                      marginTop: 10,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.75)",
                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                    }}
                  >
                    {c.issuer || ""}
                    {c.issuer && c.issuedDate ? " • " : ""}
                    {c.issuedDate || ""}
                  </div>
                )}

                <p className="workP">{c.description}</p>

                {/* ✅ View credential button style like list pages */}
                {c.credentialUrl ? (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...linkBtnStyle, marginTop: 16 }}
                  >
                    <ExternalLink size={18} /> View credential
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
