import Image from "next/image";

const skills = [
  { name: "Git", src: "/assets/skill-git.svg" },
  { name: "Javascript", src: "/assets/skill-js.svg" },
  { name: "Express", src: "/assets/skill-express.svg" },
  { name: "Figma", src: "/assets/skill-figma.svg" },
  { name: "MongoDB", src: "/assets/skill-mongodb.svg" },

  { name: "Next", src: "/assets/skill-next.svg" },
  { name: "React", src: "/assets/skill-react.svg" },
  { name: "Tailwind", src: "/assets/skill-tailwind.svg" },
  { name: "Typescript", src: "/assets/skill-ts.svg" },
];

export default function SkillGrid() {
  return (
    <div
      style={{
        marginTop: 44,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 26,
      }}
    >
      {skills.map((s) => (
        <div key={s.name} style={{ display: "flex", justifyContent: "center" }}>
          {/* Your SVG already contains the full “card” look */}
          <Image
            src={s.src}
            alt={s.name}
            width={220}
            height={220}
            style={{ width: "100%", maxWidth: 180, height: "auto" }}
            priority={s.name === "Git" || s.name === "Javascript"}
          />
        </div>
      ))}
    </div>
  );
}
