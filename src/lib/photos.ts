import type { StaticImageData } from "next/image";
import heroWindow from "@/assets/photos/hero-window.jpg";
import flyerSupport from "@/assets/photos/flyer-support.jpg";
import aboutGarden from "@/assets/photos/about-garden.jpg";
import transport from "@/assets/photos/transport.jpg";
import shopping from "@/assets/photos/shopping.jpg";
import trips from "@/assets/photos/trips.jpg";
import community from "@/assets/photos/community.jpg";
import prescriptions from "@/assets/photos/prescriptions.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  // CSS object-position, for photos whose subject sits off-centre when cropped
  position?: string;
};

// heroWindow and flyerSupport come from the client's own artwork; the rest are
// Unsplash stock (free Unsplash License). Sources are listed in
// src/assets/photos/CREDITS.md. Swap for the client's own photos before launch.
export const photos = {
  heroWindow: {
    src: heroWindow,
    alt: "Elderly woman resting her chin on her hand, looking out of a window",
    position: "50% 25%",
  },
  flyerSupport: {
    src: flyerSupport,
    alt: "Support worker walking arm in arm with a smiling elderly woman",
  },
  aboutGarden: {
    src: aboutGarden,
    alt: "Smiling elderly woman holding hands with a friend outside a brick terrace",
    position: "50% 30%",
  },
  transport: {
    src: transport,
    alt: "Elderly man getting into the passenger seat of a car",
    position: "50% 35%",
  },
  shopping: {
    src: shopping,
    alt: "Older man choosing fresh produce at a market stall",
  },
  outings: {
    src: trips,
    alt: "Elderly couple walking arm in arm along a seaside promenade",
    position: "50% 72%",
  },
  community: {
    src: community,
    alt: "Group of older women dancing together at a community class",
    position: "50% 30%",
  },
  prescriptions: {
    src: prescriptions,
    alt: "Pharmacist showing a pill bottle to an older woman at the counter",
  },
} satisfies Record<string, Photo>;
