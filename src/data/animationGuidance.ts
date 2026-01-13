// Animation Guidance (Repaired and Completed)
export const animationGuidance = {
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
