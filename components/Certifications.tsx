"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { certifications, accentColors } from "@/lib/journey";
const display = Space_Grotesk({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const badgeAccents = ["sky", "emerald", "lime", "blue", "violet", "pink"] as const;
const certImages: { match: string; src: string }[] = [
  { match: "generative ai foundation", src: "/images/certs/cert-genai-foundations.jpg" },
  { match: "marketing management", src: "/images/certs/cert-marketing-strategy.jpg" },
  { match: "master generative ai", src: "/images/certs/cert-genai-master.jpg" },
  { match: "master", src: "/images/certs/cert-genai-master.jpg" },
  { match: "product management", src: "/images/certs/cert-product-management.png" },
  { match: "career and education counselor", src: "/images/certs/cert-career-counselor.jpg" },
  { match: "career & education counselor", src: "/images/certs/cert-career-counselor.jpg" },
];
function findImage(name: string) {
  const lower = name.toLowerCase();
  const found = certImages.find((c) => lower.includes(c.match));
  return found?.src;
}
function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="size-5">
          <path d="M18 6 6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <div
        className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="h-auto w-full rounded-xl object-contain" />
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[12px] text-white/60">
        Press Esc or click outside to close
      </p>
    </div>
  );
}
export default function Certifications() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  return (
    <section id="certifications" className="py-16 md:py-20">
      <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-neutral-400`}>
        Credentials
      </p>
      <h2 className={`${display.className} mt-2 bg-linear-to-r from-pink-600 via-violet-600 to-sky-600 bg-clip-text text-3xl font-medium text-transparent md:text-4xl`}>
        Certifications
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const color = accentColors[badgeAccents[index % badgeAccents.length]];
          const imageSrc = findImage(cert.name);
          return (
            <button
              key={cert.name}
              type="button"
              onClick={() => imageSrc && setLightbox({ src: imageSrc, alt: cert.name })}
              disabled={!imageSrc}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white text-left transition hover:border-black/20 hover:shadow-md disabled:cursor-default"
            >
              <div
                className="relative flex h-32 w-full items-center justify-center"
                style={{ background: imageSrc ? undefined : `linear-gradient(135deg, ${color}26, ${color}08)` }}
              >
                {imageSrc ? (
                  <Image src={imageSrc} alt={cert.name} fill className="object-cover" />
                ) : (
                  <>
                    <span
                      className={`${display.className} text-3xl font-semibold opacity-40`}
                      style={{ color }}
                    >
                      {initials(cert.issuer)}
                    </span>
                    <span className="absolute bottom-2 right-3 text-[10px] text-neutral-400">
                      certificate image
                    </span>
                  </>
                )}
              </div>
              <div className="p-4">
                <p className="text-[14px] font-medium leading-snug text-neutral-900">
                  {cert.name}
                </p>
                <p className={`${mono.className} mt-1.5 text-[11px] uppercase tracking-[0.08em]`} style={{ color }}>
                  {cert.issuer}
                </p>
              </div>
            </button>
          );
        })}
      </div>
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
