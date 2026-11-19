import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    hero: z.object({
      brand_text: z.string(),
      brand_suffix: z.string(),
      heading_prefix: z.string(),
      heading_highlight: z.string(),
      description: z.string(),
      background_image: z.string(),
      promotional_image: z.string(),
      promotional_image_alt: z.string(),
    }),
    benefits: z.object({
      heading: z.string(),
      items : z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          iconAlt: z.string().optional(),
        }),
      ),
    }),
    how_it_works: z.object({
      heading: z.string(),
      background_image: z.string(),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          image_alt: z.string(),
        }),
      ),
    }),
    services: z.object({
      heading: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    drive_with_us: z.object({
      heading: z.string(),
      description: z.string(),
      button_text: z.string(),
      button_url: z.string(),
      benefits: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    ride_options: z.object({
      heading: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    promotional_banners: z.object({
      items: z.array(
        z.object({
          heading: z.string(),
          button_text: z.string(),
          button_url: z.string(),
          theme: z.enum(['dark', 'yellow']),
        }),
      ),
    }),
    easy_registration: z.object({
      heading: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          image: z.string(),
          image_alt: z.string(),
          url: z.string(),
        }),
      ),
    }),
    testimonials: z.object({
      heading: z.string(),
      items: z.array(
        z.object({
          quote: z.string(),
          name: z.string(),
          location: z.string(),
          rating: z.number().int().min(1).max(5),
        }),
      ),
    }),
    safety_support: z.object({
      heading: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        }),
      ),
    }),
  }),
});

export const collections = { pages };