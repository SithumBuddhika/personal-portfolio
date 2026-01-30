"use client";

import Lottie from "lottie-react";
import animationData from "@/public/assets/experience-lottie.json";

export default function ExperienceLottieBlock() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 520,
        margin: "0 auto",
        pointerEvents: "none",
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      <Lottie animationData={animationData as any} loop autoplay />
    </div>
  );
}
