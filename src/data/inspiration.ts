export const liveInspirationSources = {
    portfolios: [
        {
            name: "Godly",
            url: "https://godly.website/",
            categories: ["trending", "website-design", "dark", "minimal"],
            updateFrequency: "daily",
            bestFor: "Current design trends, visual inspiration"
        },
        {
            name: "Awwwards",
            url: "https://www.awwwards.com/websites/",
            categories: ["site-of-the-day", "developer-award", "mobile-excellence"],
            updateFrequency: "daily",
            bestFor: "Award-winning designs, cutting-edge techniques"
        },
        {
            name: "Landbook",
            url: "https://land-book.com/",
            categories: ["saas", "agency", "portfolio", "ecommerce"],
            updateFrequency: "weekly",
            bestFor: "Landing page specific designs"
        },
        {
            name: "SiteInspire",
            url: "https://www.siteinspire.com/",
            categories: ["interactive", "minimal", "portfolio"],
            updateFrequency: "weekly",
            bestFor: "Clean, professional designs"
        }
    ],
    componentLibraries: {
        aceternity: {
            url: "https://ui.aceternity.com/components",
            style: "Premium, animated, modern",
            components: ["hero sections", "bento grids", "3d cards", "animated backgrounds"]
        },
        magicui: {
            url: "https://magicui.design/docs/components",
            style: "Playful, interactive, React-focused",
            components: ["animated text", "particles", "marquee", "charts"]
        },
        shadcn: {
            url: "https://ui.shadcn.com/",
            style: "Clean, accessible, composable",
            components: ["forms", "dialogs", "navigation", "data display"]
        }
    },
    realSiteExamples: {
        "linear.app": {
            inspireFrom: ["animations", "typography", "color restraint", "purposeful motion"],
            avoid: ["complexity", "over-decoration"]
        },
        "stripe.com": {
            inspireFrom: ["gradient usage", "bold headers", "clear hierarchy", "documentation style"],
            avoid: ["plain minimalism"]
        },
        "vercel.com": {
            inspireFrom: ["dark mode", "subtle animations", "code presentation", "clean layouts"],
            avoid: ["light mode as primary"]
        },
        "pitch.com": {
            inspireFrom: ["color blocking", "playful typography", "asymmetric layouts", "energy"],
            avoid: ["conservative design"]
        }
    }
};
