// import ExperienceLottieBlock from "./ExperienceLottieBlock";

// export default function ExperienceSection() {
//   // ✅ Keep your old items for later (commented)
//   /*
//   const items = [
//     {
//       icon: "/assets/company-google.png",
//       title: "Lead Software Engineer at Google",
//       period: "Nov 2019 - Present",
//       desc: "...",
//       filled: false,
//     },
//   ];
//   */

//   return (
//     <section
//       className="expWrap"
//       style={{
//         background: "#fff",
//         color: "#111",
//       }}
//     >
//       <div className="container">
//         <h2 className="sectionTitle">
//           My <span>Experience</span>
//         </h2>

//         {/* ✅ Placeholder UI + Lottie */}
//         <div
//           className="expSoonGrid"
//           style={{
//             marginTop: 46,
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 40,
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>
//               Updating soon
//             </div>

//             <p
//               style={{
//                 margin: 0,
//                 maxWidth: 520,
//                 lineHeight: "26px",
//                 color: "rgba(0,0,0,0.65)",
//                 fontSize: 15,
//               }}
//             >
//               I’m currently building my portfolio and preparing my first
//               industry role. This section will be updated with internships and
//               professional experience soon.
//             </p>

//             {/* ✅ small professional loader */}
//             <div
//               style={{
//                 marginTop: 18,
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 10,
//                 padding: "10px 14px",
//                 borderRadius: 999,
//                 border: "1.5px solid rgba(0,0,0,0.22)",
//                 background: "rgba(0,0,0,0.06)",
//                 color: "rgba(0,0,0,0.82)",
//                 boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
//                 fontSize: 14,
//               }}
//             >
//               <span className="expSpinner" />
//               Building experience timeline…
//             </div>
//           </div>

//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <ExperienceLottieBlock />
//           </div>
//         </div>

//         {/* ✅ tiny CSS (no styled-jsx needed) */}
//         <style>{`
//           .expSpin {
//             width: 14px;
//             height: 14px;
//             border-radius: 999px;
//             border: 2px solid rgba(0,0,0,0.35);
//             border-top-color: #111;
//             animation: expSpin 0.9s linear infinite;
//           }

//           @keyframes expSpin{
//             from{transform:rotate(0deg)}
//             to{transform:rotate(360deg)}
//           }
//           @media (max-width: 980px){
//             .expSoonGrid{
//               grid-template-columns:1fr !important;
//             }
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }

"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function ExperienceSection() {
  const [animData, setAnimData] = useState<any>(null);

  useEffect(() => {
    fetch("/assets/experience-lottie.json")
      .then((r) => r.json())
      .then(setAnimData)
      .catch(() => setAnimData(null));
  }, []);

  return (
    <section
      style={{
        background: "#fff",
        color: "#111",
        padding: "90px 0",
      }}
    >
      {/* ✅ Plain CSS (NOT styled-jsx) so it ALWAYS works */}
      <style>{`
        @keyframes expSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 980px) {
          .expGrid {
            grid-template-columns: 1fr !important;
            gap: 26px !important;
          }
          .expRight {
            justify-content: center !important;
          }
          .expTitle {
            font-size: 34px !important;
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
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div style={{ maxWidth: 560 }}>
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

            {/* ✅ spinner pill */}
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
              {/* ✅ rotating spinner */}
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

          {/* RIGHT */}
          <div
            className="expRight"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {animData ? (
              <div style={{ width: 560, maxWidth: "100%" }}>
                <Lottie
                  animationData={animData}
                  loop
                  autoplay
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: 560,
                  maxWidth: "100%",
                  height: 360,
                  borderRadius: 22,
                  border: "1.5px solid rgba(0,0,0,0.12)",
                  display: "grid",
                  placeItems: "center",
                  color: "rgba(0,0,0,0.55)",
                  fontWeight: 800,
                }}
              >
                Animation loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
