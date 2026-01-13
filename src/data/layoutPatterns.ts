// Layout Patterns
export const layoutPatterns = [
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
