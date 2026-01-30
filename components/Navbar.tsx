"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Project" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact Me" },
];

export default function Navbar({ resumeUrl }: { resumeUrl?: string }) {
  const pathname = usePathname();
  const base = pathname === "/" ? "" : "/";

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkHref = (id: string) => `${base}#${id}`;

  return (
    <header className="navbar">
      <div className="container">
        <div className="navRow">
          <Link href="/" className="brand">
            {/* <span className="brandDot" /> */}
            {/* <span className="brandText">Personal</span> */}
          </Link>

          {/* desktop */}
          <nav className="navCenter">
            {LINKS.map((l) => (
              <Link key={l.id} className="navlink" href={linkHref(l.id)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="navRight">
            <a
              className="resumeBtn"
              href={resumeUrl || "#"}
              target={resumeUrl ? "_blank" : undefined}
              rel="noreferrer"
            >
              Resume <Download size={18} />
            </a>

            <button
              className="burgerBtn"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {open && <div className="menuOverlay" onClick={() => setOpen(false)} />}

      <div className={`mobileMenu ${open ? "open" : ""}`}>
        <div className="mobileMenuTop">
          <div className="mobileMenuBrand">
            <span className="brandDot" />
            {/* <span className="brandText">Personal</span> */}
          </div>

          <button
            className="closeBtn"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobileLinks">
          {LINKS.map((l) => (
            <Link
              key={l.id}
              href={linkHref(l.id)}
              className="mobileLink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <a
            className="mobileResume"
            href={resumeUrl || "#"}
            target={resumeUrl ? "_blank" : undefined}
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume <Download size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
