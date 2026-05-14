import type { ImageMetadata } from "astro";

import limitedController from "@/assets/DualSense-Wireless-Controller-God-of-War-20th-Anniversary-Limited-Edition_d3930f03-e018-4802-9985-86821a5773e2.76841a299eef4220597bf98bbc4f6c83.avif";
import heroController from "@/assets/DualSense-30-Hero-4.webp";
import redController from "@/assets/PS5DUALSENSECR.webp";
import edgeController from "@/assets/dualsense-edge-listing-thumb-01-en-23aug22.webp";
import originalController from "@/assets/dualsense-1.webp";

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
    colors: ["Midnight Black","Cosmic Red", "Starlight Blue", "Nova Pink", "Galactic Purple", "Chroma Indigo", "Chroma Pearl", "Cobalt Blue", "Remix Green", "Rhythm Blue"],
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
