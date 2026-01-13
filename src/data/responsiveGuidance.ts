// Responsive Design Guidance
export const responsiveGuidance = {
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
