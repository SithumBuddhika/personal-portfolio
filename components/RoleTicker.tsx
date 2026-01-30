"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function RoleTicker({ roles }: { roles: string[] }) {
  const list = useMemo(() => (roles?.length ? roles : ["Developer"]), [roles]);
  const [i, setI] = useState(0);

  // ✅ reserve space so hero line never reflows (no flicker)
  const maxLen = useMemo(() => Math.max(...list.map((r) => r.length)), [list]);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % list.length), 1800);
    return () => clearInterval(t);
  }, [list.length]);

  return (
    <span
      style={{
        display: "inline-block",
        height: "1em",
        lineHeight: "1em",
        overflow: "hidden",
        verticalAlign: "baseline",
        minWidth: `${maxLen}ch`, // ✅ key line
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={list[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {list[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
