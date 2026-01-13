#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// ==========================================
// KNOWLEDGE BASE (Data Models)
// ==========================================

// Design Principles Database
const designPrinciples = [
    {
        principle: "Visual Hierarchy",
        description: "Guide users' attention to the most important content first",
        guidelines: [
            "Size: Make primary headlines 2-3x larger than body text",
            "Color: Use bold/saturated colors for important elements, muted for secondary",
            "Contrast: High contrast draws attention, low contrast recedes",
            "Position: Place key content in the top-left or center (natural reading flow)",
            "Weight: Bold text naturally draws the eye before regular weight"
        ],
        commonMistakes: [
            "Everything being the same size",
            "Too many competing focal points",
            "Important CTAs blending into the background"
        ]
    },
    {
        principle: "Whitespace",
        description: "Empty space that gives content room to breathe and creates focus",
        guidelines: [
            "Section spacing: Use 80-120px between major sections",
            "Element spacing: 24-48px padding inside cards and containers",
            "Text: Line height of 1.5-1.7 for body text, 1.1-1.3 for headlines",
            "Margins: Consistent spacing scale (8, 16, 24, 32, 48, 64, 96px)",
            "Don't fear empty space - it's a design element, not wasted space"
        ],
        commonMistakes: [
            "Cramming too much content together",
            "Inconsistent spacing throughout the page",
            "No breathing room around text blocks"
        ]
    },
    {
        principle: "Consistency",
        description: "Uniform patterns that create familiarity and reduce cognitive load",
        guidelines: [
            "Use the same button styles throughout",
            "Maintain consistent heading sizes (h1, h2, h3 scale)",
            "Apply the same border-radius to all rounded elements",
            "Use a defined color palette - don't introduce random colors",
            "Keep icon style uniform (all outlined OR all filled, same weight)"
        ],
        commonMistakes: [
            "Mixing different button styles",
            "Random border-radius values",
            "Inconsistent icon styles"
        ]
    },
    {
        principle: "Contrast",
        description: "Visual distinction between elements for readability and emphasis",
        guidelines: [
            "Text contrast: Minimum 4.5:1 ratio for body, 3:1 for large text",
            "Size contrast: Headlines should be noticeably larger, not just slightly",
            "Color contrast: CTAs should pop against their background",
            "Weight contrast: Mix light and bold weights purposefully"
        ],
        commonMistakes: [
            "Gray text on gray background",
            "Subtle size differences that look like mistakes",
            "Primary buttons that don't stand out"
        ]
    },
    {
        principle: "Alignment",
        description: "Clean visual connections that create order and professionalism",
        guidelines: [
            "Use a grid system (12-column is standard)",
            "Left-align body text for readability",
            "Center-align short headlines and CTAs for emphasis",
            "Align elements to invisible vertical lines",
            "Keep consistent left margins throughout sections"
        ],
        commonMistakes: [
            "Elements that almost align but don't quite",
            "Mixing center and left alignment randomly",
            "No underlying grid structure"
        ]
    },
    {
        principle: "Proximity",
        description: "Group related items to show relationships",
        guidelines: [
            "Related items should be closer together than unrelated items",
            "Use cards to visually group content",
            "Form labels should be closer to their inputs than to other fields",
            "Create clear section breaks with spacing, not just lines"
        ],
        commonMistakes: [
            "Equal spacing between everything",
            "Labels far from their associated elements",
            "No visual grouping of related content"
        ]
    }
];

// Layout Patterns
const layoutPatterns = [
    {
        name: "F-Pattern",
        description: "Users scan horizontally across the top, then down the left side with occasional horizontal scans",
        bestFor: ["Text-heavy pages", "Blogs", "News sites", "Documentation"],
        structure: {
            topBar: "Logo, navigation, search - users scan this first",
            mainContent: "Left-aligned, 60-70% width",
            sidebar: "Right side, 30-40% width, secondary content",
            scanning: "Users read top headline, scan left edge, occasionally glance right"
        },
        guidance: "Place most important content in top-left. Use strong headlines to catch horizontal scans. Keep key info on the left edge."
    },
    {
        name: "Z-Pattern",
        description: "Eye movement follows a Z shape - top-left to top-right, diagonal to bottom-left, then to bottom-right",
        bestFor: ["Landing pages", "Simple layouts", "Pages with minimal text", "Marketing pages"],
        structure: {
            topLeft: "Logo/brand",
            topRight: "Navigation or primary CTA",
            center: "Hero content, key message",
            bottomLeft: "Supporting content",
            bottomRight: "Final CTA, conversion point"
        },
        guidance: "Place logo top-left, CTA top-right. Guide the eye diagonally with visual elements. End with strong CTA bottom-right."
    },
    {
        name: "Single Column",
        description: "One centered column of content for focused reading",
        bestFor: ["Blog posts", "Articles", "Documentation", "Mobile-first design", "Forms"],
        structure: {
            width: "Max 680-720px for optimal reading",
            alignment: "Centered on page",
            content: "Linear flow from top to bottom"
        },
        guidance: "Ideal for reading-focused content. Keep line length 45-75 characters. Use generous vertical spacing between sections."
    },
    {
        name: "Split Screen",
        description: "Divide viewport into two distinct sections",
        bestFor: ["Comparison pages", "Dual offerings", "Sign-up/login pages", "Before/after"],
        structure: {
            leftSide: "50% width - can be image or content",
            rightSide: "50% width - complementary content",
            variants: "Can use 60/40 or 40/60 for emphasis"
        },
        guidance: "Each side should be able to stand alone visually. Use contrasting but complementary colors. Consider which side gets focus."
    },
    {
        name: "Card Grid",
        description: "Repeating card components in a responsive grid",
        bestFor: ["Product listings", "Portfolio", "Team pages", "Feature showcases", "Blog archives"],
        structure: {
            columns: "3-4 on desktop, 2 on tablet, 1 on mobile",
            cards: "Equal height, consistent internal structure",
            gap: "16-24px between cards"
        },
        guidance: "Keep cards uniform in structure. Use consistent image ratios. Ensure equal heights in each row."
    },
    {
        name: "Bento Grid",
        description: "Asymmetrical grid with varied card sizes for visual interest",
        bestFor: ["Modern portfolios", "Feature showcases", "Dashboard layouts", "Creative agencies"],
        structure: {
            grid: "Mix of 1x1, 2x1, 1x2, and 2x2 cards",
            featured: "Larger cards for important items",
            balance: "Distribute sizes for visual balance"
        },
        guidance: "Feature most important content in larger cards. Create visual rhythm with size variation. Maintain consistent gaps."
    },
    {
        name: "Hero + Sections",
        description: "Large hero section followed by stacked content sections",
        bestFor: ["Landing pages", "Marketing sites", "Product pages", "Company websites"],
        structure: {
            hero: "60-100vh, full-width, single focused message",
            sections: "Alternating content blocks, each with clear purpose",
            flow: "Natural scroll progression telling a story"
        },
        guidance: "Hero should have one clear message and CTA. Each section should have distinct purpose. Use visual variety to maintain interest."
    }
];

// Color Psychology and Schemes
const colorGuidance = {
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

// Typography Guidance
const typographyGuidance = {
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

// Component Design Guidance (NEW - Enhanced)
const componentGuidance = {
    buttons: {
        primary: {
            sizing: "px-6 py-3 (24px horizontal, 12px vertical) minimum",
            fontSize: "16-18px, never below 16px",
            borderRadius: "8-12px for modern feel (or fully rounded with rounded-full)",
            fontWeight: "600 (semi-bold)",
            colors: "High contrast - if bg is blue-600, text should be white",
            hoverEffect: "Darken by 10% or add subtle shadow: shadow-lg",
            example: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
        },
        secondary: {
            style: "Border style with transparent background",
            example: "border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg"
        },
        modernVariants: [
            "Gradient buttons: from-purple-600 to-blue-600",
            "Glassmorphic: backdrop-blur-md bg-white/10 border border-white/20",
            "Neumorphic: Subtle shadows for depth"
        ]
    },
    cards: {
        modern: {
            background: "White with subtle shadow OR gradient backgrounds",
            shadow: "shadow-lg hover:shadow-xl transition-shadow",
            borderRadius: "12-16px (very rounded corners)",
            padding: "p-6 to p-8 (24-32px)",
            border: "Either no border OR subtle 1px border-gray-200",
            hover: "Transform scale-105 or lift with shadow"
        },
        layout: {
            image: "Rounded corners matching card, aspect-ratio 16:9 or 1:1",
            spacing: "gap-4 between image and content",
            cta: "Place at bottom with mt-auto in flex column"
        }
    },
    forms: {
        inputs: {
            sizing: "h-12 to h-14 (48-56px height) for comfortable interaction",
            padding: "px-4 py-3",
            borderRadius: "8-10px",
            border: "2px solid - gray-300 default, blue-500 on focus",
            fontSize: "16px minimum (prevents zoom on mobile)",
            background: "White or very light gray (gray-50)"
        },
        labels: {
            position: "Above input with mb-2",
            fontSize: "14px",
            fontWeight: "500-600",
            color: "gray-700"
        },
        validation: {
            success: "Green border + checkmark icon",
            error: "Red border + error message below in red text"
        }
    },
    navigation: {
        modern: {
            style: "Clean, minimal, with clear active states",
            linkSpacing: "gap-8 between nav items",
            fontSize: "15-16px",
            fontWeight: "500",
            activeState: "Underline or colored background pill",
            hoverState: "Color change or subtle underline"
        },
        mobile: {
            pattern: "Slide-in drawer OR full-screen overlay",
            animation: "Smooth transition 300ms",
            closeButton: "Clear X icon top-right"
        }
    }
};

// Section-Specific Guidance (Enhanced)
const sectionGuidance = {
    header: {
        purpose: "Navigation, brand identity, and primary actions",
        modern2026Style: {
            background: "backdrop-blur-lg bg-white/80 with subtle border-bottom",
            height: "72px desktop (more breathing room), 64px mobile",
            padding: "px-6 lg:px-12 (responsive horizontal padding)",
            layout: "Flex with justify-between and items-center",
            sticky: "sticky top-0 z-50 with smooth transition"
        },
        structure: [
            "Logo: Left side, h-8 to h-10 (32-40px), links to homepage",
            "Navigation: Center or right, max-w-2xl, gap-8 between items",
            "CTA: Right side, contrasting primary button with px-6 py-2.5"
        ],
        bestPractices: [
            "Use subtle shadow on scroll: shadow-sm",
            "Keep nav items to 4-6 maximum",
            "Mobile: Hamburger menu with smooth slide-in drawer",
            "Logo should be clickable and return to home"
        ]
    },
    hero: {
        purpose: "Capture attention, communicate value proposition, drive action",
        modern2026Style: {
            background: "Gradient backgrounds OR high-quality imagery with overlay",
            gradientExample: "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500",
            overlayExample: "Darkened image with backdrop-brightness-75",
            height: "min-h-screen or min-h-[600px] for full impact",
            padding: "py-20 lg:py-32 for vertical breathing room"
        },
        structure: [
            "Headline: 3-4rem lg:5-6rem (48-96px), font-bold, leading-tight",
            "Subheadline: text-xl lg:text-2xl, text-gray-600, max-w-2xl, leading-relaxed",
            "CTA Group: Primary + Secondary buttons side-by-side with gap-4",
            "Visual: High-quality mockup, illustration, or animated element"
        ],
        contentLayout: {
            centered: "max-w-4xl mx-auto text-center - best for simple message",
            split: "Grid lg:grid-cols-2 gap-12 items-center - best for showing product",
            visual: "Content takes 60% left, visual 40% right OR reversed"
        },
        typography: {
            headline: "Use gradient text: bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
            subheadline: "text-gray-600 dark:text-gray-300",
            emphasis: "Highlight key words with different color or font-weight-700"
        },
        ctaBestPractices: [
            "Primary CTA: Large (px-8 py-4), bold color, clear action verb",
            "Secondary CTA: Ghost button or subtle link with arrow →",
            "Add micro-copy under CTAs: 'No credit card required' builds trust",
            "Space between buttons: gap-3 or gap-4"
        ],
        avoid: [
            "Generic stock photos - use custom illustrations or real product shots",
            "Walls of text - keep it concise",
            "Weak CTAs like 'Learn More' - use 'Start Building', 'Get Started'"
        ]
    },
    features: {
        purpose: "Showcase capabilities and benefits",
        modern2026Style: {
            layout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            background: "Gray-50 or gradient section to differentiate from hero",
            padding: "py-20 lg:py-32",
            maxWidth: "max-w-7xl mx-auto"
        },
        sectionHeader: {
            headline: "text-3xl lg:text-5xl font-bold text-center mb-4",
            subheadline: "text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto",
            alignment: "Centered for visual impact"
        },
        featureCard: {
            structure: "Icon → Title → Description → Optional Link",
            spacing: "flex flex-col gap-4 p-6 lg:p-8",
            icon: {
                size: "48-64px (h-12 to h-16)",
                style: "Colorful gradient background OR simple colored icon",
                example: "bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg"
            },
            title: "text-xl lg:text-2xl font-semibold mb-2",
            description: "text-gray-600 leading-relaxed"
        },
        modernVariants: [
            "Bento Grid: Asymmetrical layout with featured items larger",
            "Alternating: Content left, image right, then reversed",
            "Icon Grid: Large icons with minimal text for clarity",
            "Card Hover: Scale or lift cards on hover with shadow-xl"
        ],
        bestPractices: [
            "Limit to 6-9 features - more overwhelms users",
            "Use benefit-focused titles, not feature names",
            "Icons should be consistent style (all line OR all solid)",
            "Add subtle hover effects for interactivity"
        ]
    },
    pricing: {
        purpose: "Present pricing options clearly and drive conversions",
        modern2026Style: {
            layout: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
            background: "Clean white OR subtle gradient background",
            padding: "py-20 lg:py-32",
            cardSpacing: "gap-8 allows cards to breathe"
        },
        pricingCard: {
            structure: "Name → Price → Features List → CTA",
            styling: "bg-white rounded-2xl shadow-lg p-8 flex flex-col",
            featured: "Transform scale-105 + colored border-2 border-purple-500 + shadow-2xl",
            badge: "Popular tier gets 'Most Popular' badge at top"
        },
        priceDisplay: {
            format: "Large number + small period + currency",
            example: "text-6xl font-bold + /month in text-xl text-gray-600",
            emphasis: "Make monthly price prominent, annual savings secondary"
        },
        features: {
            list: "space-y-3 my-8",
            item: "flex items-start gap-3",
            icon: "Checkmark icon (✓) in brand color, h-5 w-5",
            text: "text-gray-700",
            negativeFeatures: "Show with X icon and text-gray-400 for transparency"
        },
        bestPractices: [
            "Highlight recommended tier with visual emphasis",
            "Include annual pricing toggle to show savings",
            "Use clear tier names: Starter, Pro, Enterprise",
            "Add 'Contact Us' for enterprise instead of price",
            "Include trust signals: 'Cancel anytime', 'Money-back guarantee'"
        ]
    },
    faq: {
        purpose: "Answer common questions and reduce friction",
        modern2026Style: {
            layout: "max-w-4xl mx-auto - narrow for readability",
            background: "Clean white or very subtle gray",
            padding: "py-20",
            accordion: "Expandable items with smooth animation"
        },
        structure: {
            header: "text-3xl lg:text-4xl font-bold text-center mb-12",
            item: "border-b border-gray-200 py-6",
            question: "text-lg font-semibold text-gray-900 cursor-pointer hover:text-purple-600",
            answer: "text-gray-600 leading-relaxed mt-3 pr-12",
            icon: "Chevron or + icon that rotates on expand"
        },
        contentStrategy: [
            "Start with most common questions (pricing, trial, cancellation)",
            "Keep answers concise - 2-3 sentences max",
            "Use conversational tone, avoid jargon",
            "Link to detailed docs for complex topics",
            "Include 6-10 questions maximum"
        ],
        commonQuestions: [
            "How does the free trial work?",
            "Can I cancel anytime?",
            "What payment methods do you accept?",
            "Do you offer refunds?",
            "How do I get support?",
            "Is my data secure?"
        ]
    },
    testimonials: {
        purpose: "Build trust through social proof",
        modern2026Style: {
            layout: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            background: "White or subtle gradient",
            padding: "py-20 lg:py-32"
        },
        cardDesign: {
            style: "bg-white rounded-xl shadow-md p-8 flex flex-col",
            quote: "text-lg text-gray-700 leading-relaxed mb-6",
            rating: "Stars (⭐) or custom icon, mb-4",
            avatar: "h-12 w-12 rounded-full",
            name: "font-semibold text-gray-900",
            title: "text-sm text-gray-600",
            logo: "Company logo, h-6, grayscale with opacity-50"
        },
        contentGuidelines: [
            "Use specific, results-focused quotes",
            "Include real names, photos, and companies",
            "Vary lengths - some short, some detailed",
            "Show diverse range of customers",
            "Add video testimonials for premium feel"
        ],
        layouts: [
            "Masonry Grid: Staggered heights for visual interest",
            "Scrolling Marquee: Auto-scrolling horizontal strip",
            "Featured + Grid: One large testimonial + smaller grid"
        ]
    },
    footer: {
        purpose: "Secondary navigation, legal info, final touchpoint",
        modern2026Style: {
            background: "bg-gray-900 text-gray-300 OR bg-gray-50 text-gray-700",
            padding: "pt-16 pb-8",
            layout: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
            maxWidth: "max-w-7xl mx-auto px-6"
        },
        structure: {
            companySection: {
                logo: "mb-4 - same as header but adapt color",
                description: "text-sm leading-relaxed mb-6 max-w-xs",
                social: "flex gap-4 - h-6 w-6 icons with hover effects"
            },
            linkColumns: {
                title: "font-semibold mb-4 text-white (or dark on light bg)",
                links: "space-y-3 text-sm",
                hover: "hover:text-white transition-colors"
            },
            newsletter: {
                title: "font-semibold mb-4",
                input: "flex gap-2 - email input + submit button",
                privacy: "text-xs text-gray-500 mt-2"
            }
        },
        bottom: {
            divider: "border-t border-gray-800 mt-12 pt-8",
            layout: "flex flex-col md:flex-row justify-between items-center gap-4",
            copyright: "text-sm text-gray-500",
            legal: "flex gap-6 text-sm - Privacy, Terms, Cookies links"
        },
        bestPractices: [
            "Keep link categories logical: Product, Company, Resources, Legal",
            "Include contact email and location if relevant",
            "Social icons should match brand style",
            "Mobile: Stack columns vertically with clear spacing",
            "Add newsletter signup for lead generation"
        ]
    }
};

// Modern Color Palettes for 2026 (Enhanced)
const modern2026Palettes = {
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

// Responsive Design Guidance
const responsiveGuidance = {
    breakpoints: {
        mobile: "< 640px - Single column, stacked content",
        tablet: "640px - 1024px - 2 columns, adapted spacing",
        desktop: "1024px - 1280px - Full layout",
        wide: "> 1280px - Contained width, extra whitespace"
    },
    mobileFirst: {
        principle: "Design for mobile first, enhance for larger screens",
        reasoning: "60%+ of traffic is mobile. Easier to add than remove."
    },
    adaptations: {
        navigation: "Hamburger menu below 768px, full menu above",
        grids: "1 column mobile, 2 tablet, 3-4 desktop",
        typography: "Reduce heading sizes 25-35% on mobile",
        spacing: "Reduce section padding 30-50% on mobile"
    },
    touchTargets: {
        minimum: "44x44px for all interactive elements",
        spacing: "At least 8px between touch targets"
    }
};

// Modern Design Trends (2026 Edition)
const modernTrends = {
    currentTrends2026: [
        {
            name: "Bento Grids",
            description: "Asymmetrical grid layouts with varied card sizes, inspired by Japanese bento boxes",
            implementation: "Use CSS Grid with grid-template-columns and span classes",
            example: "Some cards span 2 columns (col-span-2), others 1, creates visual rhythm",
            whenToUse: "Portfolios, feature showcases, modern dashboards, landing pages",
            avoid: "On mobile (stack to single column instead)"
        },
        {
            name: "Glassmorphism",
            description: "Frosted glass effect with backdrop blur, transparency, and subtle borders",
            implementation: "backdrop-blur-lg bg-white/10 border border-white/20",
            whenToUse: "Cards over images/gradients, nav bars, modals, floating elements",
            avoid: "Overuse - use for accent elements, not everything",
            accessibility: "Ensure text contrast is still strong"
        },
        {
            name: "Dark Mode First",
            description: "Design for dark mode as primary, with light mode as alternative",
            implementation: "Use dark:class-name for light mode alternatives",
            colors: "Dark gray (not pure black) backgrounds, vibrant accent colors pop more",
            whenToUse: "Tech products, developer tools, creative apps, evening-use products",
            userControl: "Always offer toggle - respect user preference"
        },
        {
            name: "3D Elements & Depth",
            description: "Subtle 3D illustrations, layered cards, shadow depth for hierarchy",
            implementation: "shadow-2xl, transform utilities, perspective in CSS",
            examples: "Floating mockups, isometric illustrations, layered UI cards",
            whenToUse: "Hero sections, feature visuals, product showcases",
            avoid: "Heavy 3D that slows performance"
        },
        {
            name: "Micro-interactions",
            description: "Small animations that respond to user actions for delight and feedback",
            examples: [
                "Button hover: Subtle scale or color change",
                "Form success: Checkmark animation",
                "Loading: Skeleton screens or progress indicators",
                "Scroll: Parallax or fade-in effects"
            ],
            timing: "Keep under 300ms for responsive feel",
            whenToUse: "Everywhere - it's about polish and feedback"
        },
        {
            name: "Oversized Typography",
            description: "Giant headlines (80-120px+) as primary design elements",
            implementation: "text-6xl lg:text-8xl font-bold",
            effect: "Creates immediate impact and hierarchy",
            whenToUse: "Hero sections, landing pages, editorial content",
            balance: "Pair with plenty of whitespace"
        },
        {
            name: "Gradient Mesh Backgrounds",
            description: "Soft, blurred gradient orbs that create depth and modern aesthetic",
            implementation: "Multiple absolutely positioned divs with blur-3xl and gradient-to-br",
            colors: "Use 2-3 brand colors with low opacity (20-30%)",
            whenToUse: "Hero backgrounds, section backgrounds, full-page backgrounds",
            performance: "Use CSS, not images, for better performance"
        },
        {
            name: "Brutalism Revival (Selective)",
            description: "Bold, raw, unconventional layouts for statement brands",
            characteristics: "Sharp edges, bold colors, overlapping elements, raw typography",
            whenToUse: "Creative agencies, art portfolios, fashion brands",
            avoid: "B2B, traditional industries, unless intentionally edgy"
        }
    ],
    avoidTheseOutdated: [
        "Flat design without depth - add subtle shadows",
        "Skeuomorphism - overly realistic textures",
        "Automatic carousels - users ignore them",
        "Hamburger menu on desktop - show navigation",
        "Pop-ups on page load - use exit-intent or delayed",
        "Auto-playing video with sound - mute by default",
        "Stock photos of people in office - use custom illustrations",
        "Social media icon walls - focus on 2-3 platforms"
    ],
    balancingAct: [
        "Trend: Use modern techniques but don't sacrifice usability",
        "Brand: Align trends with brand personality",
        "Audience: Consider if your users expect cutting-edge or traditional",
        "Performance: Fancy effects shouldn't slow down the site",
        "Accessibility: Never compromise contrast or navigation for aesthetics"
    ]
};

// Accessibility Guidance
const accessibilityGuidance = {
    colorContrast: {
        normalText: "4.5:1 minimum ratio",
        largeText: "3:1 minimum (18px+ or 14px bold)",
        uiComponents: "3:1 for interactive elements"
    },
    focusStates: {
        requirement: "All interactive elements must have visible focus",
        implementation: "Outline or ring, 2-3px, contrasting color"
    },
    semanticHTML: {
        landmarks: "Use header, main, nav, footer, section, article",
        headings: "Proper hierarchy (h1 > h2 > h3), no skipping levels"
    },
    bestPractices: [
        "Test with keyboard navigation",
        "Don't rely on color alone to convey information",
        "Provide alt text for informative images"
    ]
};

// Animation Guidance (Repaired and Completed)
const animationGuidance = {
    purposes: {
        feedback: "Confirm user actions (button press, form submit)",
        continuity: "Smooth transitions between states/pages",
        attention: "Draw focus to important elements",
        hierarchy: "Show relationships and depth",
        delight: "Add personality and polish (use sparingly)"
    },
    timingPrinciples: {
        microInteractions: "100-200ms (instant feel)",
        smallTransitions: "200-300ms (noticeable but quick)",
        mediumTransitions: "300-500ms (deliberate movement)",
        largeTransitions: "500-800ms (page loads, complex reveals)"
    },
    easings: {
        standard: "ease-in-out (natural acceleration/deceleration)",
        enter: "ease-out (fast in, slow stop)",
        exit: "ease-in (slow start, fast out)"
    },
    bestPractices: [
        "Respect 'prefers-reduced-motion' media query",
        "Don't animate just for the sake of it",
        "Keep animations fast to avoid feeling sluggish"
    ]
};

// ==========================================
// MCP SERVER IMPLEMENTATION
// ==========================================

const server = new Server(
    {
        name: "design-guidance-server",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// Defines the tools available to the AI
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "get_component_guidance",
                description: "Returns detailed design specs for UI components (buttons, cards, forms, navigation) with modern 2026 best practices.",
                inputSchema: {
                    type: "object",
                    properties: {
                        component: {
                            type: "string",
                            description: "Specific component type (optional). Options: buttons, cards, forms, navigation. Returns all if empty.",
                            enum: ["buttons", "cards", "forms", "navigation"]
                        }
                    },
                },
            },
            {
                name: "get_modern_palettes",
                description: "Returns trending 2026 color palette combinations with specific hex codes and usage examples.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_design_principles",
                description: "Retrieves core UI/UX principles (hierarchy, whitespace, contrast) to ensure visual quality.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_layout_patterns",
                description: "Returns standard layout patterns (F-pattern, Z-pattern, Bento Grid) and when to use them.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_color_guidance",
                description: "Returns color psychology, color scheme types, and modern palette examples.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_typography_guidance",
                description: "Returns font hierarchy scales, font pairings, and readability best practices.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_section_guidance",
                description: "Returns specific structure and design advice for common page sections (hero, footer, features).",
                inputSchema: {
                    type: "object",
                    properties: {
                        section: {
                            type: "string",
                            description: "Specific section to query (optional). Returns all if empty.",
                            enum: ["header", "hero", "features", "testimonials", "cta", "footer", "pricing", "faq"]
                        }
                    },
                },
            },
            {
                name: "get_responsive_guidance",
                description: "Returns breakpoints, mobile-first principles, and touch target rules.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_accessibility_guidance",
                description: "Returns a11y standards regarding contrast, focus states, and semantic HTML.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_modern_trends",
                description: "Returns current visual design trends and what trends to avoid.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_animation_guidance",
                description: "Returns best practices for UI animation timing, easing, and purpose.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            },
            {
                name: "get_holistic_design_review",
                description: "Returns a comprehensive checklist of all design categories to review a user's concept.",
                inputSchema: {
                    type: "object",
                    properties: {},
                },
            }
        ],
    };
});

// Handles the execution of the tools
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    switch (name) {
        case "get_component_guidance":
            const component = (args as any)?.component as keyof typeof componentGuidance;
            if (component && componentGuidance[component]) {
                return {
                    content: [{ 
                        type: "text", 
                        text: JSON.stringify({ 
                            component: component, 
                            guidance: componentGuidance[component] 
                        }, null, 2) 
                    }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(componentGuidance, null, 2) }],
            };

        case "get_modern_palettes":
            return {
                content: [{ type: "text", text: JSON.stringify(modern2026Palettes, null, 2) }],
            };

        case "get_design_principles":
            return {
                content: [{ type: "text", text: JSON.stringify(designPrinciples, null, 2) }],
            };

        case "get_layout_patterns":
            return {
                content: [{ type: "text", text: JSON.stringify(layoutPatterns, null, 2) }],
            };

        case "get_color_guidance":
            return {
                content: [{ type: "text", text: JSON.stringify(colorGuidance, null, 2) }],
            };

        case "get_typography_guidance":
            return {
                content: [{ type: "text", text: JSON.stringify(typographyGuidance, null, 2) }],
            };

        case "get_section_guidance":
            const section = (args as any)?.section as keyof typeof sectionGuidance;
            if (section && sectionGuidance[section]) {
                return {
                    content: [{ 
                        type: "text", 
                        text: JSON.stringify({ 
                            section: section, 
                            guidance: sectionGuidance[section] 
                        }, null, 2) 
                    }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(sectionGuidance, null, 2) }],
            };

        case "get_responsive_guidance":
            return {
                content: [{ type: "text", text: JSON.stringify(responsiveGuidance, null, 2) }],
            };
        
        case "get_accessibility_guidance":
            return {
                content: [{ type: "text", text: JSON.stringify(accessibilityGuidance, null, 2) }],
            };

        case "get_modern_trends":
            return {
                content: [{ type: "text", text: JSON.stringify(modernTrends, null, 2) }],
            };
            
        case "get_animation_guidance":
            return {
                content: [{ type: "text", text: JSON.stringify(animationGuidance, null, 2) }],
            };

        case "get_holistic_design_review":
            // Returns a consolidated view of keys to check
            const checklist = {
                principles: designPrinciples.map(p => p.principle),
                layouts: layoutPatterns.map(l => l.name),
                accessibility: ["Contrast Check", "Focus States", "Semantic HTML"],
                mobile: ["Touch Targets", "Readable Text", "No Horizontal Scroll"]
            };
            return {
                content: [{ type: "text", text: JSON.stringify(checklist, null, 2) }],
            };

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);