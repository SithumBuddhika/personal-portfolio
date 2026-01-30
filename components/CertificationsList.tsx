import Image from "next/image";
import { ExternalLink } from "lucide-react";

type Certification = {
  _id?: string;
  order: number;
  title: string;
  issuer: string;
  year: string;
  imageUrl: string;
  credentialUrl?: string;
};

export default function CertificationsList({
  certifications,
}: {
  certifications: Certification[];
}) {
  const btnStyle = {
    marginTop: 14,
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
          My Certifications
        </h1>

        <div style={{ display: "grid", gap: 36 }}>
          {certifications.map((c) => (
            <div
              key={c._id || c.order}
              style={{
                display: "grid",
                gridTemplateColumns: "360px 1fr",
                gap: 32,
                alignItems: "center",
              }}
            >
              <Image
                src={c.imageUrl}
                alt={c.title}
                width={700}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 18,
                  objectFit: "cover",
                }}
              />

              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, opacity: 0.7 }}>
                  {String(c.order).padStart(2, "0")}
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
                  {c.title}
                </h2>

                <div
                  style={{
                    marginTop: 6,
                    opacity: 0.75,
                    overflowWrap: "anywhere",
                  }}
                >
                  {c.issuer} · {c.year}
                </div>

                {c.credentialUrl ? (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={btnStyle}
                  >
                    <ExternalLink size={18} /> View credential
                  </a>
                ) : null}
              </div>

              <style>{`
                @media (max-width: 980px) {
                  section { padding: 56px 0 !important; }
                  h1 { font-size: 34px !important; margin-bottom: 34px !important; }
                  div[style*="grid-template-columns: 360px 1fr"] {
                    grid-template-columns: 1fr !important;
                    gap: 18px !important;
                  }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
