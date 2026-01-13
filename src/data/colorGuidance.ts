// Color Psychology and Schemes
export const colorGuidance = {
    psychology: {
        blue: {
            associations: ["Trust", "Stability", "Professionalism", "Calm", "Security"],
            bestFor: ["Finance", "Healthcare", "Technology", "Corporate", "SaaS"],
            avoid: ["Food (suppresses appetite)", "Urgency-based messaging"]
        },
        green: {
            associations: ["Growth", "Nature", "Health", "Wealth", "Sustainability"],
            bestFor: ["Environmental", "Health/Wellness", "Finance", "Organic products"],
            avoid: ["Luxury brands", "High-energy products"]
        },
        red: {
            associations: ["Energy", "Urgency", "Passion", "Excitement", "Power"],
            bestFor: ["Sales/Clearance", "Food", "Entertainment", "Sports"],
            avoid: ["Healthcare", "Financial (except warnings)", "Relaxation"]
        },
        orange: {
            associations: ["Creativity", "Enthusiasm", "Fun", "Confidence", "Adventure"],
            bestFor: ["Youth brands", "Creative agencies", "Food", "Fitness"],
            avoid: ["Luxury", "Corporate/formal", "Healthcare"]
        },
        purple: {
            associations: ["Luxury", "Creativity", "Wisdom", "Royalty", "Mystery"],
            bestFor: ["Beauty", "Luxury goods", "Creative services", "Spirituality"],
            avoid: ["Budget brands", "Masculine products", "Agriculture"]
        },
        black: {
            associations: ["Elegance", "Power", "Sophistication", "Luxury", "Mystery"],
            bestFor: ["Luxury brands", "Fashion", "Tech", "Premium products"],
            avoid: ["Children's products", "Healthcare", "Budget brands"]
        },
        white: {
            associations: ["Purity", "Simplicity", "Cleanliness", "Modern", "Minimal"],
            bestFor: ["Healthcare", "Tech", "Minimalist brands", "Weddings"],
            avoid: ["Over-reliance can feel sterile or empty"]
        }
    },
    modernPalettes: [
        {
            name: "Professional Trust",
            primary: "Deep blue (#1E40AF to #2563EB)",
            accent: "Amber or teal for CTAs",
            neutrals: "Slate grays",
            mood: "Trustworthy, established, reliable"
        },
        {
            name: "Modern Minimal",
            primary: "Near-black (#0F172A)",
            accent: "Single vibrant color for emphasis",
            neutrals: "Cool grays on white",
            mood: "Clean, sophisticated, focused"
        },
        {
            name: "Warm & Approachable",
            primary: "Coral or warm orange (#F97316)",
            accent: "Complementary teal",
            neutrals: "Warm grays",
            mood: "Friendly, energetic, inviting"
        },
        {
            name: "Nature & Growth",
            primary: "Forest green (#15803D)",
            accent: "Earth tones or gold",
            neutrals: "Warm off-whites",
            mood: "Organic, sustainable, healthy"
        },
        {
            name: "Dark Mode Elegant",
            primary: "Dark gray (#18181B) background",
            accent: "Vibrant purple, blue, or green",
            neutrals: "Gray scale for hierarchy",
            mood: "Modern, tech-forward, sophisticated"
        }
    ],
    applicationRules: {
        sixtyThirtyTen: "60% dominant color (usually background), 30% secondary, 10% accent",
        ctaColors: "CTAs should be the most visually distinct color on the page",
        textColors: "Dark text on light backgrounds, light text on dark. Never pure black (#000) on pure white (#FFF) - too harsh",
        backgrounds: "Slight tints are softer than pure white. #FAFAFA or #F8FAFC feel more refined"
    }
};
