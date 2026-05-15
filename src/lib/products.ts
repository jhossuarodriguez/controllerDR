import type { ImageMetadata } from "astro";

import chromaIndigoController from "@/assets/ps5-controller/chroma-indigo.avif";
import chromaPearlController from "@/assets/ps5-controller/chroma-pearl.avif";
import cobaltBlueController from "@/assets/ps5-controller/cobalt-blue.avif";
import redController from "@/assets/ps5-controller/cosmic-red.avif";
import originalController from "@/assets/ps5-controller/dualsense-1.avif";
import edgeController from "@/assets/ps5-controller/dualsense-edge.avif";
import heroController from "@/assets/ps5-controller/DualSense-007-edition.avif";
import galacticPurpleController from "@/assets/ps5-controller/galactic-purple.avif";
import limitedController from "@/assets/ps5-controller/god-of-war-limited-edition.avif";
import midnightBlackController from "@/assets/ps5-controller/midnight-black.avif";
import remixGreenController from "@/assets/ps5-controller/remix-green.avif";
import rhythmBlueController from "@/assets/ps5-controller/rhythm-blue.avif";
import starlightBlueController from "@/assets/ps5-controller/starlight-blue.avif";
import sterlingSilverController from "@/assets/ps5-controller/sterling-silver.avif";
import technoRedController from "@/assets/ps5-controller/techno-red.avif";

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
  colorImages?: Record<string, ImageMetadata>
}


export const colorSwatches: Record<string, string> = {
  White: "#ffffff",
  "Midnight Black":
    "linear-gradient(135deg, #09090A 0%, #111113 60%, #222226 100%)",
  "Cosmic Red": "#c91832",
  "Starlight Blue": "#8fb7e8",
  "Galactic Purple": "#5d4b8c",
  "Chroma Indigo":
    "linear-gradient(135deg, #1A0B5E 0%, #3F00FF 35%, #6900C6 70%, #9A00E6 100%)",
  "Chroma Pearl":
    "linear-gradient(135deg, #FDFBF7 0%, #EAE5D9 40%, #E3E9E2 75%, #F5E6EC 100%)",
  "Chroma Teal":
    "linear-gradient(135deg, #004B49 0%, #008080 35%, #00A3A3 70%, #76FFD4 100%)",
  "Cobalt Blue":
    "linear-gradient(135deg, #001F54 0%, #0047AB 50%, #0074E4 100%)",
  "Remix Green":
    "linear-gradient(180deg, #111113 0%, #111113 45%, #9dcb36 45%, #9dcb36 100%)",
  "Rhythm Blue":
    "linear-gradient(180deg, #111113 0%, #111113 45%, #00A2E8 45%, #00A2E8 100%)",
  "Sterling Silver": "#98a2b4",
  "Tecno Red":
    "linear-gradient(180deg, #111113 0%, #111113 45%, #e31a35 45%, #e31a35 100%)",
};

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
    colors: ["Midnight Black", "Cosmic Red", "Starlight Blue", "Galactic Purple", "Chroma Indigo", "Chroma Pearl", "Cobalt Blue", "Remix Green", "Rhythm Blue", "Sterling Silver", "Tecno Red"],
    colorImages: {
      "Midnight Black": midnightBlackController,
      "Cosmic Red": redController,
      "Starlight Blue": starlightBlueController,
      "Galactic Purple": galacticPurpleController,
      "Chroma Indigo": chromaIndigoController,
      "Chroma Pearl": chromaPearlController,
      "Cobalt Blue": cobaltBlueController,
      "Remix Green": remixGreenController,
      "Rhythm Blue": rhythmBlueController,
      "Sterling Silver": sterlingSilverController,
      "Tecno Red": technoRedController,
    },

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