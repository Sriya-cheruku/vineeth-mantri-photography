"use client";

import { useState } from "react";

/** <img> with graceful fallback so a failed remote image never leaves a broken icon. */
export default function Photo({
  src, alt, className = "", priority = false,
}: { src: string; alt: string; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div role="img" aria-label={alt} className={`photo-fallback ${className}`} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
