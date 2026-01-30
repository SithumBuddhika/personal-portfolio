// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section id="about" className="about-wrap">
//       <div className="container">
//         <div className="about-grid">
//           <div className="overflow-hidden rounded-[12px]">
//             <Image
//               src="/assets/about.jpg"
//               alt="About"
//               width={900}
//               height={900}
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           <div>
//             <h2 className="about-title">About Me</h2>
//             <p className="about-text">
//               I&apos;m a passionate, self-proclaimed designer who specializes in
//               full stack development (React.js & Node.js). I am very
//               enthusiastic about bringing the technical and visual aspects of
//               digital products to life. User experience, pixel perfect design,
//               and writing clear, readable, highly performant code matters to me.
//               <br />
//               <br />
//               I began my journey as a web developer in 2015, and since then,
//               I&apos;ve continued to grow and evolve as a developer, taking on
//               new challenges and learning the latest technologies along the way.
//               <br />
//               <br />
//               When I&apos;m not in full-on developer mode, you can find me
//               hovering around on twitter or on indie hacker.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
              I’m a Software Engineering undergraduate at SLIIT with a strong
              interest in web application development and full-stack
              engineering. I enjoy taking an idea from a rough concept and
              turning it into a real product—from designing backend APIs to
              building clean, user-friendly interfaces.
              <br />
              <br />
              I’m a Software Engineering undergraduate at SLIIT with a strong
              interest in web application development and full-stack
              engineering. I enjoy taking an idea from a rough concept and
              turning it into a real product—from designing backend APIs to
              building clean, user-friendly interfaces.
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
