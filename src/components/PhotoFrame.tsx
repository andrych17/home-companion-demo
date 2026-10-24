import React from "react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

interface PhotoFrameProps {
  photo: Photo;
  aspect?: string;
  // Above-the-fold headers load eagerly so they don't hurt LCP
  eager?: boolean;
}

export default function PhotoFrame({
  photo,
  aspect = "aspect-[4/3]",
  eager = false,
}: PhotoFrameProps) {
  return (
    <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
      <div
        className={`double-bezel-inner relative overflow-hidden bg-slate-100 ${aspect}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 40vw, 100vw"
          loading={eager ? "eager" : undefined}
          fetchPriority={eager ? "high" : undefined}
          className="object-cover"
          style={{ objectPosition: photo.position }}
        />
      </div>
    </div>
  );
}
