// Component Design Guidance (NEW - Enhanced)
export const componentGuidance = {
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
