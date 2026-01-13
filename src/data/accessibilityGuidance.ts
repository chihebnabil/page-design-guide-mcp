// Accessibility Guidance
export const accessibilityGuidance = {
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
