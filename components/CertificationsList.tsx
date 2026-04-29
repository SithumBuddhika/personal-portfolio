"use client";

import { useMemo, useState } from "react";
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

const CERTIFICATIONS_PER_PAGE = 3;

export default function CertificationsList({
  certifications,
}: {
  certifications: Certification[];
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certifications.length / CERTIFICATIONS_PER_PAGE);

  const visibleCertifications = useMemo(() => {
    const start = (currentPage - 1) * CERTIFICATIONS_PER_PAGE;
    return certifications.slice(start, start + CERTIFICATIONS_PER_PAGE);
  }, [certifications, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const btnStyle = {
    marginTop: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 800,
    textDecoration: "none",
    color: "inherit",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1.5px solid rgba(255,255,255,0.22)",
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
          {visibleCertifications.map((c) => (
            <div key={c._id || c.order} className="certListRow">
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
            </div>
          ))}
        </div>

        {totalPages > 1 ? (
          <div className="paginationWrap">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="paginationBtn"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`paginationNumber ${isActive ? "active" : ""}`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="paginationBtn"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>

      <style>{`
        .certListRow {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 32px;
          align-items: center;
        }

        .paginationWrap {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .paginationBtn,
        .paginationNumber {
          height: 42px;
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,0.22);
          background: transparent;
          color: inherit;
          font-weight: 800;
          cursor: pointer;
        }

        .paginationBtn {
          padding: 0 16px;
        }

        .paginationBtn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .paginationNumber {
          width: 42px;
        }

        .paginationNumber.active {
          background: #fff;
          color: #000;
          border-color: #fff;
          font-weight: 900;
        }

        @media (max-width: 980px) {
          section {
            padding: 56px 0 !important;
          }

          h1 {
            font-size: 34px !important;
            margin-bottom: 34px !important;
          }

          .certListRow {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .paginationWrap {
            margin-top: 42px;
          }
        }
      `}</style>
    </section>
  );
}
