// Modern Design Trends (2026 Edition)
export const modernTrends = {
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
