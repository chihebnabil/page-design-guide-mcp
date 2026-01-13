// Design Principles Database
export const designPrinciples = [
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
            "Use the grid system (12-column is standard)",
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
