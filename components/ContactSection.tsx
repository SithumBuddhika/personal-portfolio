"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", website: "", message: "" });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section className="contactWrap">
      <div className="container">
        <div className="contactGrid">
          {/* LEFT FORM */}
          <div>
            <input
              className="input"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              className="input"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{ marginTop: 16 }}
            />

            <input
              className="input"
              placeholder="Your website (If exists)"
              name="website"
              value={form.website}
              onChange={handleChange}
              style={{ marginTop: 16 }}
            />

            <textarea
              className="textarea"
              placeholder="How can I help?"
              name="message"
              value={form.message}
              onChange={handleChange}
              style={{ marginTop: 16 }}
            />

            {/* BUTTON + SOCIALS */}
            <div className="socialRow" style={{ marginTop: 18 }}>
              {/* Get In Touch button */}
              <button
                className="contactBtn"
                onClick={handleSubmit}
                disabled={loading}
                onMouseDown={() => setBtnActive(true)}
                onMouseUp={() => setBtnActive(false)}
                onMouseLeave={() => setBtnActive(false)}
                style={{
                  transform: btnActive ? "scale(0.96)" : "scale(1)",
                  transition: "transform 0.12s ease",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Sending..." : "Get In Touch"}
              </button>

              {/* socials — SAME STYLE AS HERO */}

              <a
                href="https://github.com/SithumBuddhika"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                style={{
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/social-github.png"
                  alt="Github"
                  width={56}
                  height={56}
                />
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                style={{
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/social-discord.png"
                  alt="Discord"
                  width={56}
                  height={56}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/sithum-buddhika-jayalal-827860341"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/social-linkedin.png"
                  alt="LinkedIn"
                  width={56}
                  height={56}
                />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                style={{
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/social-twitter.png"
                  alt="Twitter"
                  width={56}
                  height={56}
                />
              </a>
            </div>
          </div>

          {/* RIGHT INFO */}
          <div>
            <h2 className="bigTitle">
              Let’s talk for
              <br />
              Something special
            </h2>

            <p className="bigDesc">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            <div className="bigStrong">{email}</div>
            <div className="bigStrong">{phone}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
