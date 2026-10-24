import type { StaticImageData } from "next/image";
import companionVisit from "@/assets/photos/companion-visit.jpg";
import aboutGarden from "@/assets/photos/about-garden.jpg";
import trips from "@/assets/photos/trips.jpg";
import gardening from "@/assets/photos/gardening.jpg";
import appointments from "@/assets/photos/appointments.jpg";
import housework from "@/assets/photos/housework.jpg";
import dogWalking from "@/assets/photos/dog-walking.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  // CSS object-position, for photos whose subject sits off-centre when cropped
  position?: string;
};

// Stock photos from Unsplash (free Unsplash License). Sources are listed in
// src/assets/photos/CREDITS.md. Swap for the client's own photos before launch.
export const photos = {
  companionVisit: {
    src: companionVisit,
    alt: "Companion sharing a laugh with an elderly woman at home",
  },
  aboutGarden: {
    src: aboutGarden,
    alt: "Smiling elderly woman holding hands with a friend outside a brick terrace",
    position: "50% 30%",
  },
  trips: {
    src: trips,
    alt: "Elderly couple walking arm in arm along a seaside promenade",
    position: "50% 72%",
  },
  gardening: {
    src: gardening,
    alt: "Two older women working together in a vegetable garden",
  },
  appointments: {
    src: appointments,
    alt: "Older couple listening to a doctor during an appointment",
  },
  housework: {
    src: housework,
    alt: "Elderly woman preparing a fresh salad in her kitchen",
  },
  dogWalking: {
    src: dogWalking,
    alt: "Elderly woman laughing as a small dog leans in to greet her",
  },
} satisfies Record<string, Photo>;
