// Section-Specific Guidance (Enhanced)
export const sectionGuidance = {
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
