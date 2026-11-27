import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({
    pattern: "homepage.md",
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

const aboutPages = defineCollection({
  loader: glob({
    pattern: "about.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    heading: z.string(),
  }),
});

const contactPages = defineCollection({
  loader: glob({
    pattern: 'contact.md',
    base: './src/content/pages',
  }),
  schema: z.object({
    contact: z.object({
      heading: z.string(),
      address_heading: z.string(),
      address: z.string(),
      address_url: z.string(),
      phone_heading: z.string(),
      phone: z.string(),
      email: z.string().optional(),
    }),
  }),
});

const downloadPages = defineCollection({
  loader: glob({
    pattern: 'downloads.md',
    base: './src/content/pages',
  }),
  schema: z.object({
    download: z.object({
      heading: z.string(),
      description: z.string(),
      app_store_url: z.string(),
      google_play_url: z.string(),
      app_store_image: z.string(),
      google_play_image: z.string(),
      background_image: z.string(),
      phone_image: z.string(),
      phone_image_alt: z.string(),
    }),
  }),
});

const legalPages = defineCollection({
  loader: glob({
    pattern: "legal.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    heading: z.string(),
  }),
});

const howItWorksPages = defineCollection({
  loader: glob({
    pattern: "how-it-works.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    heading: z.string(),
  }),
});

const trustSafetyPages = defineCollection({
  loader: glob({
    pattern: "trust-safety.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    heading: z.string(),
  }),
});

const privacyPolicy = defineCollection({
  loader: glob({
    pattern: 'privacy-policy.md',
    base: './src/content/pages',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  pages,
  aboutPages,
  contactPages,
  downloadPages,
  legalPages,
  howItWorksPages,
  trustSafetyPages,
  privacyPolicy 
};