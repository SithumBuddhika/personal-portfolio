"use client";

import { useState, useEffect } from "react";
import ExperienceLottieBlock from "./ExperienceLottieBlock";

type ExperienceType = {
  _id?: string;
  company: string;
  role: string;
  logoUrl: string;
  startDate: string;
  endDate?: string;
  present: boolean;
  description: string;
  order: number;
};

// Extract 1-2 character initials from the company name for fallback avatars
function getCompanyInitials(companyName: string) {
  if (!companyName) return "?";
  // Remove non-alphanumeric symbols (like /, &, -) and corporate suffixes
  const cleaned = companyName
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/\b(pvt|ltd|inc|co|llc|corp)\b/gi, "")
    .trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function ExperienceCard({ exp }: { exp: ExperienceType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const wordLimit = 45;
  const words = exp.description ? exp.description.split(/\s+/) : [];
  const needsTruncation = words.length > wordLimit;

  const displayDescription = isExpanded
    ? exp.description
    : (needsTruncation
        ? words.slice(0, wordLimit).join(" ") + "..."
        : exp.description);

  return (
    <div className="expCard expSingleCard">
      {/* Logo */}
      <div className="expLogoContainer">
        {mounted && !logoError && exp.logoUrl ? (
          <img
            src={exp.logoUrl}
            alt={`${exp.company} logo`}
            className="expLogoImg"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="expLogoFallback">
            {getCompanyInitials(exp.company)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="expCardContent">
        {/* Header Row */}
        <div className="expHeaderRow">
          <h3 className="expCardRole">{exp.role}</h3>
          <span className={`expCardDate ${exp.present ? "activeRole" : ""}`}>
            {exp.present && <span className="pulseDot" />}
            {exp.startDate} – {exp.present ? "Present" : exp.endDate}
          </span>
        </div>

        {/* Company */}
        <div className="expCardCompany">{exp.company}</div>

        {/* Description */}
        <p className="expCardDesc">
          {displayDescription}
          {needsTruncation && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="expSeeMoreBtn"
              type="button"
            >
              {isExpanded ? "see less" : "see more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

export default function ExperienceSection({ experiences }: { experiences: ExperienceType[] }) {
  const hasExperiences = experiences && experiences.length > 0;

  return (
    <section
      className="expWrap"
      style={{
        background: "#fff",
        color: "#111",
        padding: "90px 0",
      }}
    >
      {/* Plain CSS so it scoped perfectly */}
      <style>{`
        @keyframes expSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-green {
          0% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 5px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .pulseDot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          margin-right: 6px;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse-green 2s infinite;
          vertical-align: middle;
        }

        .expSingleCard {
          display: flex;
          gap: 28px;
          align-items: flex-start;
          width: 100%;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05) !important;
          border-radius: 20px !important;
          padding: 36px 40px !important;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.01) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .expSingleCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02) !important;
          border-color: rgba(0, 0, 0, 0.12) !important;
        }

        .expLogoContainer {
          flex-shrink: 0;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none !important;
          box-shadow: none !important;
          overflow: hidden;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .expLogoImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding: 0;
          border-radius: 50%;
        }

        .expLogoFallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
          color: #fff;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .expCardContent {
          flex-grow: 1;
          min-width: 0;
        }

        .expHeaderRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px 16px;
        }

        .expCardRole {
          font-family: var(--font-premium), var(--premium-font), sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #09090b;
          margin: 0;
          letter-spacing: -0.3px;
          line-height: 1.25;
        }

        .expCardCompany {
          font-size: 15.5px;
          font-weight: 600;
          color: #4b5563;
          margin-top: 5px;
        }

        .expCardDate {
          font-size: 14px;
          font-weight: 550;
          color: #71717a;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }

        .expCardDate.activeRole {
          color: #059669;
          font-weight: 600;
        }

        .expCardDesc {
          margin: 16px 0 0 0;
          font-size: 14.5px;
          line-height: 1.7;
          color: #4b5563;
        }

        .expSeeMoreBtn {
          background: none;
          border: none;
          padding: 0;
          margin-left: 6px;
          font-size: 14.5px;
          font-weight: 700;
          color: #09090b;
          text-decoration: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 2.5px;
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .expSeeMoreBtn:hover {
          color: #4f46e5;
        }

        .expSidebar {
          position: sticky;
          top: 100px;
          align-self: start;
        }

        @media (max-width: 980px) {
          .expGrid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .expRight {
            justify-content: center !important;
          }
          .expTitle {
            font-size: 34px !important;
          }
          .expSidebar {
            position: relative;
            top: 0;
          }
          .expLogoContainer {
            width: 80px;
            height: 80px;
          }
          .expLogoFallback {
            font-size: 20px;
          }
          .expCardRole {
            font-size: 19px;
          }
        }

        @media (max-width: 480px) {
          .expSingleCard {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 18px !important;
            padding: 24px !important;
          }
          .expLogoContainer {
            width: 72px;
            height: 72px;
          }
          .expLogoFallback {
            font-size: 18px;
          }
          .expHeaderRow {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="sectionTitle expTitle" style={{ color: "#111" }}>
          My <span>Experience</span>
        </h2>

        <div
          className="expGrid"
          style={{
            marginTop: 46,
            display: "grid",
            gridTemplateColumns: "1.35fr 0.65fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
            {hasExperiences ? (
              experiences.map((exp) => (
                <ExperienceCard key={exp._id || String(exp.order)} exp={exp} />
              ))
            ) : (
              // Fallback content when database has zero records
              <div>
                <div style={{ fontSize: 22, fontWeight: 900 }}>Updating soon</div>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.65)",
                  }}
                >
                  I’m currently building my portfolio and preparing my first
                  industry role. This section will be updated with internships and
                  professional experience soon.
                </p>

                {/* spinner pill */}
                <div
                  style={{
                    marginTop: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 18px",
                    borderRadius: 999,
                    border: "1.5px solid rgba(0,0,0,0.18)",
                    background: "rgba(0,0,0,0.03)",
                    fontWeight: 800,
                    color: "#111",
                  }}
                >
                  {/* rotating spinner */}
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      border: "2px solid rgba(0,0,0,0.25)",
                      borderTopColor: "#111",
                      display: "inline-block",
                      animation: "expSpin 0.8s linear infinite",
                      flex: "0 0 auto",
                    }}
                  />
                  Building experience timeline...
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div
            className="expRight expSidebar"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div style={{ width: "100%", maxWidth: 360 }}>
              <ExperienceLottieBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
