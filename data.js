// ===== EDIT THIS FILE TO ADD CONTENT =====
// Put images in /images and reference them like "images/my-pic.png".
// Missing images fall back to a colored placeholder, so the site works from day one.
window.SITE = {
  title: "Prompt Vault",
  tagline: "NovelAI prompts, vibe transfers, and the links I keep reaching for.",
  author: { name: "Your name", url: "https://github.com/your-username" },

  prompts: [
    {
      title: "Lantern festival at dusk",
      tags: ["solo", "night", "fantasy", "warm light"],
      images: ["images/lantern-1.png", "images/lantern-2.png"],
      prompt: "1girl, long black hair, hanafuda earrings, standing on stone bridge, paper lanterns, dusk, warm rim lighting, depth of field, detailed background, masterpiece",
      negative: "lowres, bad anatomy, blurry, text, watermark",
      model: "NAI Diffusion V4.5",
      notes: "Works best at 832x1216. Swap the bridge for a pier for a harbor version."
    },
    {
      title: "Rainy neon alley",
      tags: ["solo", "neon", "city", "night"],
      images: ["images/neon-1.png"],
      prompt: "1boy, oversized jacket, rain, neon signs, wet pavement, reflections, cinematic lighting, from below",
      negative: "lowres, bad hands, jpeg artifacts",
      model: "NAI Diffusion V4.5",
      notes: ""
    },
    {
      title: "Two at the observatory",
      tags: ["pair", "space", "soft light"],
      images: [],
      prompt: "2girls, observatory, telescope, starry sky through window, leaning on shoulder, soft blue light, quiet mood",
      negative: "lowres, extra limbs",
      model: "NAI Diffusion V4.5",
      notes: "Placeholder entry. Delete me."
    }
  ],

  vibes: [
    {
      name: "Soft watercolor haze",
      image: "images/vibe-watercolor.png",
      tags: ["painterly", "pastel"],
      strength: 0.6,
      infoExtracted: 1.0,
      code: "PASTE-YOUR-VIBE-CODE-OR-SHARE-LINK-HERE",
      notes: "Good on landscapes. Drop strength to 0.4 for characters."
    },
    {
      name: "Grainy 90s anime cel",
      image: "",
      tags: ["retro", "cel shading"],
      strength: 0.7,
      infoExtracted: 0.8,
      code: "PASTE-YOUR-VIBE-CODE-OR-SHARE-LINK-HERE",
      notes: ""
    }
  ],

  resources: [
    { category: "NovelAI", title: "NovelAI Documentation", url: "https://docs.novelai.net/", desc: "Official docs for image generation, vibe transfer, and tags." },
    { category: "Tags", title: "Danbooru tag search", url: "https://danbooru.donmai.us/wiki_pages/tag_groups", desc: "Look up tag names and groupings the model was trained on." },
    { category: "Community", title: "Add your own link", url: "https://example.com", desc: "Delete these examples and add yours." }
  ]
};
