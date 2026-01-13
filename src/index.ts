#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { designPrinciples } from "./data/designPrinciples.js";
import { layoutPatterns } from "./data/layoutPatterns.js";
import { colorGuidance } from "./data/colorGuidance.js";
import { typographyGuidance } from "./data/typographyGuidance.js";
import { componentGuidance } from "./data/componentGuidance.js";
import { sectionGuidance } from "./data/sectionGuidance.js";
import { modern2026Palettes } from "./data/modernPalettes.js";
import { responsiveGuidance } from "./data/responsiveGuidance.js";
import { modernTrends } from "./data/modernTrends.js";
import { accessibilityGuidance } from "./data/accessibilityGuidance.js";
import { animationGuidance } from "./data/animationGuidance.js";
import { liveInspirationSources } from "./data/inspiration.js";

// ==========================================
// MCP SERVER IMPLEMENTATION
// ==========================================

const server = new Server(
    {
        name: "design-guidance-server",
        version: "1.0.7",
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
            },
            {
                name: "get_inspiration_by_mood",
                description: "Returns curated inspiration sources (websites, component libraries) based on desired mood or style.",
                inputSchema: {
                    type: "object",
                    properties: {
                        mood: {
                            type: "string",
                            description: "The mood or style to search for (e.g., 'minimal', 'dark', 'animated'). Returns all if empty."
                        }
                    },
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

        case "get_inspiration_by_mood":
             const mood = (args as any)?.mood?.toLowerCase();
             if (!mood) {
                 return {
                     content: [{ type: "text", text: JSON.stringify(liveInspirationSources, null, 2) }],
                 };
             }

             // Filter logic for inspirations
             const filtered = {
                 portfolios: liveInspirationSources.portfolios.filter(p =>
                     p.categories.some(c => c.includes(mood)) ||
                     p.bestFor.toLowerCase().includes(mood) ||
                     p.name.toLowerCase().includes(mood)
                 ),
                 componentLibraries: Object.entries(liveInspirationSources.componentLibraries)
                    .filter(([_, lib]) => lib.style.toLowerCase().includes(mood) || lib.components.some(c => c.includes(mood)))
                    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}),
                 realSiteExamples: Object.entries(liveInspirationSources.realSiteExamples)
                    .filter(([_, site]) => site.inspireFrom.some(i => i.includes(mood)))
                    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})
             };

             return {
                 content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
             };

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
