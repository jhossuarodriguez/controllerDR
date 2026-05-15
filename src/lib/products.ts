import type { ImageMetadata } from "astro";

import limitedController from "@/assets/ps5-controller/god-of-war-limited-edition.avif";
import heroController from "@/assets/ps5-controller/DualSense-30-Hero-4.avif";
import redController from "@/assets/ps5-controller/cosmic-red.avif";
import edgeController from "@/assets/ps5-controller/dualsense-edge-listing-thumb-01-en-23aug22.avif";
import originalController from "@/assets/ps5-controller/dualsense-1.avif";

export interface Product {
  slug: string;
  name: string;
  eyebrow: string;
  price: string;
  image: ImageMetadata;
  imageAlt: string;
  description: string;
  features: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    slug: "dualsense-white",
    name: "Original DualSense",
    eyebrow: "Best everyday pick",
    price: "From RD$4,995",
    image: originalController,
    imageAlt: "White PS5 DualSense controller",
    description: "Factory-sealed PS5 controller for players who want the original Sony feel, fast local coordination, and full console compatibility.",
    features: ["Haptic feedback", "Adaptive triggers", "Built-in microphone", "USB-C charging"],
    colors: ["White"],
  },
  {
    slug: "dualsense-cosmic-red",
    name: "Limited Colors",
    eyebrow: "Color drops",
    price: "From RD$5,995",
    image: redController,
    imageAlt: "Cosmic Red PS5 DualSense controller",
    description: "Rotating DualSense colors for players who want their setup to look different without compromising original Sony performance.",
    features: ["Original Sony hardware", "Limited color availability", "PS5 and PC compatible", "Local delivery coordination"],
    colors: ["Midnight Black", "Cosmic Red", "Starlight Blue", "Nova Pink", "Galactic Purple", "Chroma Indigo", "Chroma Pearl", "Cobalt Blue", "Remix Green", "Rhythm Blue", "Sterling Silver", "Tecno Red"],
  },
  {
    slug: "dualsense-edge",
    name: "DualSense Edge",
    eyebrow: "Pro controller",
    price: "From RD$12,995",
    image: edgeController,
    imageAlt: "DualSense Edge wireless controller",
    description: "A pro-level wireless controller with deeper customization for competitive players and premium PlayStation setups.",
    features: ["Remappable inputs", "Changeable stick caps", "Adjustable trigger stops", "Premium carrying case"],
    colors: ["White and black"],
  },
  {
    slug: "god-of-war-limited-edition",
    name: "God of War Limited Edition",
    eyebrow: "Collector drop",
    price: "Ask for availability",
    image: limitedController,
    imageAlt: "God of War limited edition PS5 DualSense controller",
    description: "A collector-focused DualSense drop for PlayStation fans who want a special-edition controller when stock reaches the Dominican Republic.",
    features: ["Limited-edition design", "Collector-friendly packaging", "Original DualSense features", "Availability confirmed by request"],
    colors: ["God of War Gray"],
  },
];

export const featuredHeroProduct = {
  image: heroController,
  imageAlt: "PS5 DualSense controller",
};
