"use client";
import { assetDimensions } from "@/lib/asset-dimensions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
export function Art({
  name,
  className = "",
  alt = "",
  priority = false,
}: {
  name: string;
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/assets/${name}.webp`}
      alt={alt}
      width={assetDimensions[name]?.[0] || 540}
      height={assetDimensions[name]?.[1] || 460}
      className={`art ${className}`}
      priority={priority}
    />
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0.8, 1], y: [14, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
export function Heading({
  eyebrow,
  children,
  text,
  light = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "ink" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {text && <p>{text}</p>}
      <span className="heading-rule" aria-hidden="true">
        ◆
      </span>
    </div>
  );
}
export function Cta({
  children = "Quero viver essa missão",
  secondary = false,
}: {
  children?: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      className={`button ${secondary ? "secondary" : ""}`}
      href={secondary ? "#como-funciona" : "#oferta"}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}
export function useClock() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    const frame = requestAnimationFrame(update);
    const timer = setInterval(update, 1000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);
  return now;
}
