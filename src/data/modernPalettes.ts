// Modern Color Palettes for 2026 (Enhanced)
export const modern2026Palettes = {
    trendingCombinations: [
        {
            name: "Purple + Cyan (Tech/SaaS)",
            gradient: "from-purple-600 via-purple-700 to-cyan-600",
            primary: "#9333EA (purple-600)",
            secondary: "#0891B2 (cyan-600)",
            accent: "#F59E0B (amber-500)",
            neutrals: "Slate grays (slate-50 to slate-900)",
            usage: "Modern SaaS, AI products, tech platforms",
            example: "Backgrounds in gradients, CTAs in solid purple, accents in cyan"
        },
        {
            name: "Emerald + Indigo (Professional)",
            gradient: "from-emerald-600 to-indigo-600",
            primary: "#059669 (emerald-600)",
            secondary: "#4F46E5 (indigo-600)",
            accent: "#EAB308 (yellow-500)",
            neutrals: "Warm grays (gray-50 to gray-900)",
            usage: "Finance, healthcare, B2B services",
            example: "Trust-building with green, authority with indigo"
        },
        {
            name: "Orange + Pink (Creative/Bold)",
            gradient: "from-orange-500 via-red-500 to-pink-500",
            primary: "#F97316 (orange-500)",
            secondary: "#EC4899 (pink-500)",
            accent: "#8B5CF6 (violet-500)",
            neutrals: "Warm off-whites and grays",
            usage: "Creative agencies, entertainment, youth brands",
            example: "Energetic, attention-grabbing, playful feel"
        },
        {
            name: "Monochrome + Accent (Minimal)",
            base: "from-gray-900 to-gray-800 (dark) OR gray-50 (light)",
            primary: "#0F172A (slate-900) or #F8FAFC (slate-50)",
            accent: "One vibrant: #3B82F6 (blue-500) OR #10B981 (emerald-500)",
            neutrals: "Full gray scale",
            usage: "Premium brands, minimalist design, luxury",
            example: "Mostly grayscale with strategic pops of color"
        },
        {
            name: "Nature Earth Tones (Organic)",
            palette: "Olive, terracotta, sage, cream",
            primary: "#78716C (stone-500)",
            secondary: "#84CC16 (lime-500)",
            accent: "#EA580C (orange-600)",
            neutrals: "Warm beiges and browns",
            usage: "Sustainable brands, wellness, organic products",
            example: "Calming, natural, trustworthy feel"
        }
    ],
    implementation: {
        backgrounds: [
            "Gradient backgrounds: bg-gradient-to-br from-[color1] to-[color2]",
            "Mesh gradients: Blurred colored orbs for modern feel",
            "Subtle patterns: Dots, grids, or noise texture at low opacity"
        ],
        textOnColor: [
            "Dark backgrounds: Use white or very light text (gray-50)",
            "Light backgrounds: Use dark text (gray-900 or slate-900)",
            "Colored backgrounds: Check contrast ratio - aim for 4.5:1 minimum"
        ],
        buttons: [
            "Primary: Solid brand color with hover darken",
            "Secondary: Outline or ghost style",
            "Gradient buttons: Apply gradient to background, white text"
        ]
    }
};
