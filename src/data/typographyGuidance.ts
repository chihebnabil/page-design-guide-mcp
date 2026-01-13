// Typography Guidance
export const typographyGuidance = {
    hierarchy: {
        h1: {
            usage: "Page title only - one per page",
            sizing: "2.5-4rem (40-64px) on desktop",
            weight: "Bold (700) or Extra Bold (800)",
            lineHeight: "1.1-1.2 (tight)"
        },
        h2: {
            usage: "Major section headings",
            sizing: "1.75-2.5rem (28-40px)",
            weight: "Semi-bold (600) or Bold (700)",
            lineHeight: "1.2-1.3"
        },
        body: {
            usage: "Main content text",
            sizing: "1rem-1.125rem (16-18px) - never below 16px",
            weight: "Regular (400)",
            lineHeight: "1.5-1.7 for readability"
        },
        small: {
            usage: "Captions, labels, secondary info",
            sizing: "0.875rem (14px) minimum",
            weight: "Regular or Medium (400-500)",
            lineHeight: "1.4-1.5"
        }
    },
    fontPairings: {
        modern: {
            heading: "Inter, SF Pro Display, Outfit, or Satoshi",
            body: "Inter, System UI, or DM Sans",
            character: "Clean, geometric, tech-forward"
        },
        classic: {
            heading: "Playfair Display, Merriweather, or Lora",
            body: "Source Serif Pro, Georgia, or Charter",
            character: "Elegant, editorial, traditional"
        },
        friendly: {
            heading: "Poppins, Nunito, or Quicksand",
            body: "Open Sans, Lato, or Nunito Sans",
            character: "Approachable, warm, rounded"
        }
    },
    bestPractices: [
        "Limit to 2 font families maximum (one for headings, one for body)",
        "Use weight variations for hierarchy instead of many fonts",
        "Keep line length 45-75 characters for optimal readability",
        "Tighten letter-spacing on large headlines (-0.02 to -0.04em)",
        "Left-align body text - centered text is harder to read"
    ]
};
