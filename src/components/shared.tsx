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
  children,
  text,
  light = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "ink" : ""}`}>
      <h2>{children}</h2>
      {text && <p>{text}</p>}
      <span className="heading-rule" aria-hidden="true">
        ◆
      </span>
    </div>
  );
}
export function Cta({
  children = "Quero a Missão Secreta",
  secondary = false,
  placement = "section",
}: {
  children?: React.ReactNode;
  secondary?: boolean;
  placement?: string;
}) {
  return (
    <a
      className={`button ${secondary ? "secondary" : ""}`}
      href="#oferta"
      data-cta-action="view-offer"
      data-cta-placement={placement}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}
export function useClock(enabled = true) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const update = () => setNow(Date.now());
    const frame = requestAnimationFrame(update);
    const timer = setInterval(update, 1000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, [enabled]);
  return now;
}
