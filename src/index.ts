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
                description: "Returns trending 2026 color palette combinations with specific hex codes and usage examples. Use category to filter by palette type.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["warm", "cool", "monochromatic", "high-contrast", "pastel", "earth-tone"],
                            description: "Filter by palette category. Returns all palettes if omitted."
                        }
                    },
                },
            },
            {
                name: "get_design_principles",
                description: "Retrieves core UI/UX principles (hierarchy, whitespace, contrast) to ensure visual quality. Filter by specific principle type.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["hierarchy", "whitespace", "contrast", "visual-balance", "typography", "color-theory"],
                            description: "Filter by design principle category. Returns all if omitted."
                        }
                    },
                },
            },
            {
                name: "get_layout_patterns",
                description: "Returns standard layout patterns (F-pattern, Z-pattern, Bento Grid) and when to use them. Filter by specific pattern type.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["f-pattern", "z-pattern", "bento-grid", "single-column", "grid-based", "asymmetric"],
                            description: "Filter by layout pattern type. Returns all patterns if omitted."
                        }
                    },
                },
            },
            {
                name: "get_color_guidance",
                description: "Returns color psychology, color scheme types, and modern palette examples. Filter by specific color topic.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["psychology", "accessibility", "combinations", "trends", "psychology", "schemes"],
                            description: "Filter by color guidance topic. Returns all guidance if omitted."
                        }
                    },
                },
            },
            {
                name: "get_typography_guidance",
                description: "Returns font hierarchy scales, font pairings, and readability best practices. Filter by specific typography topic.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["hierarchy", "pairings", "readability", "web-fonts", "spacing", "scaling"],
                            description: "Filter by typography topic. Returns all guidance if omitted."
                        }
                    },
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
                description: "Returns breakpoints, mobile-first principles, and touch target rules. Filter by specific responsive topic.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["breakpoints", "mobile-first", "touch-targets", "fluid-design", "viewport", "adaptation"],
                            description: "Filter by responsive design topic. Returns all guidance if omitted."
                        }
                    },
                },
            },
            {
                name: "get_accessibility_guidance",
                description: "Returns a11y standards regarding contrast, focus states, and semantic HTML. Filter by specific accessibility topic.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["contrast", "focus-states", "semantic-html", "screen-readers", "aria", "keyboard-nav"],
                            description: "Filter by accessibility topic. Returns all guidance if omitted."
                        }
                    },
                },
            },
            {
                name: "get_modern_trends",
                description: "Returns current visual design trends and what trends to avoid. Filter by specific trend category.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["visual-trends", "avoid-these", "emerging", "typography", "layout", "color"],
                            description: "Filter by trend category. Returns all trends if omitted."
                        }
                    },
                },
            },
            {
                name: "get_animation_guidance",
                description: "Returns best practices for UI animation timing, easing, and purpose. Filter by specific animation topic.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["timing", "easing", "micro-interactions", "performance", "transitions", "physics"],
                            description: "Filter by animation topic. Returns all guidance if omitted."
                        }
                    },
                },
            },
            {
                name: "get_holistic_design_review",
                description: "Returns a comprehensive checklist of all design categories to review a user's concept. Filter to specific review area.",
                inputSchema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enum: ["full-review", "principles", "accessibility", "responsive", "typography", "color"],
                            description: "Filter to specific review area. Returns complete checklist if omitted."
                        }
                    },
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
            const paletteCategory = (args as any)?.category;
            if (paletteCategory) {
                const filteredPalettes = modern2026Palettes.trendingCombinations.filter(
                    p => p.name.toLowerCase().includes(paletteCategory.toLowerCase()) ||
                         p.usage.toLowerCase().includes(paletteCategory.toLowerCase())
                );
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: paletteCategory, palettes: filteredPalettes }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(modern2026Palettes, null, 2) }],
            };

        case "get_design_principles":
            const principleCategory = (args as any)?.category;
            if (principleCategory) {
                const filteredPrinciples = designPrinciples.filter(
                    p => p.principle.toLowerCase().replace(/\s+/g, '-') === principleCategory.toLowerCase() ||
                         p.principle.toLowerCase().includes(principleCategory.toLowerCase())
                );
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: principleCategory, principles: filteredPrinciples }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(designPrinciples, null, 2) }],
            };

        case "get_layout_patterns":
            const layoutCategory = (args as any)?.category;
            if (layoutCategory) {
                const filteredLayouts = layoutPatterns.filter(
                    l => l.name.toLowerCase().replace(/\s+/g, '-') === layoutCategory.toLowerCase() ||
                         l.name.toLowerCase().includes(layoutCategory.toLowerCase())
                );
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: layoutCategory, layouts: filteredLayouts }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(layoutPatterns, null, 2) }],
            };

        case "get_color_guidance":
            const colorCategory = (args as any)?.category;
            if (colorCategory) {
                const filteredColor: Record<string, any> = {};
                for (const [key, value] of Object.entries(colorGuidance)) {
                    if (key.toLowerCase().includes(colorCategory.toLowerCase())) {
                        filteredColor[key] = value;
                    }
                }
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: colorCategory, guidance: filteredColor }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(colorGuidance, null, 2) }],
            };

        case "get_typography_guidance":
            const typeCategory = (args as any)?.category;
            if (typeCategory) {
                const filteredType: Record<string, any> = {};
                for (const [key, value] of Object.entries(typographyGuidance)) {
                    if (key.toLowerCase().includes(typeCategory.toLowerCase())) {
                        filteredType[key] = value;
                    }
                }
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: typeCategory, guidance: filteredType }, null, 2) }],
                };
            }
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
            const responsiveCategory = (args as any)?.category;
            if (responsiveCategory) {
                const filteredResponsive: Record<string, any> = {};
                for (const [key, value] of Object.entries(responsiveGuidance)) {
                    if (key.toLowerCase().includes(responsiveCategory.toLowerCase())) {
                        filteredResponsive[key] = value;
                    }
                }
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: responsiveCategory, guidance: filteredResponsive }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(responsiveGuidance, null, 2) }],
            };
        
        case "get_accessibility_guidance":
            const a11yCategory = (args as any)?.category;
            if (a11yCategory) {
                const filteredA11y: Record<string, any> = {};
                for (const [key, value] of Object.entries(accessibilityGuidance)) {
                    if (key.toLowerCase().includes(a11yCategory.toLowerCase())) {
                        filteredA11y[key] = value;
                    }
                }
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: a11yCategory, guidance: filteredA11y }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(accessibilityGuidance, null, 2) }],
            };

        case "get_modern_trends":
            const trendsCategory = (args as any)?.category;
            if (trendsCategory) {
                const filteredTrends: Record<string, any> = {};
                for (const [key, value] of Object.entries(modernTrends)) {
                    if (key.toLowerCase().includes(trendsCategory.toLowerCase())) {
                        filteredTrends[key] = value;
                    }
                }
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: trendsCategory, trends: filteredTrends }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(modernTrends, null, 2) }],
            };
            
        case "get_animation_guidance":
            const animationCategory = (args as any)?.category;
            if (animationCategory) {
                const filteredAnimation: Record<string, any> = {};
                for (const [key, value] of Object.entries(animationGuidance)) {
                    if (key.toLowerCase().includes(animationCategory.toLowerCase())) {
                        filteredAnimation[key] = value;
                    }
                }
                return {
                    content: [{ type: "text", text: JSON.stringify({ filtered: animationCategory, guidance: filteredAnimation }, null, 2) }],
                };
            }
            return {
                content: [{ type: "text", text: JSON.stringify(animationGuidance, null, 2) }],
            };

        case "get_holistic_design_review":
            const reviewCategory = (args as any)?.category;
            const checklist = {
                principles: designPrinciples.map(p => p.principle),
                layouts: layoutPatterns.map(l => l.name),
                accessibility: ["Contrast Check", "Focus States", "Semantic HTML"],
                mobile: ["Touch Targets", "Readable Text", "No Horizontal Scroll"]
            };
            if (reviewCategory) {
                if (reviewCategory === "principles") {
                    return {
                        content: [{ type: "text", text: JSON.stringify({ filtered: "principles", principles: designPrinciples }, null, 2) }],
                    };
                } else if (reviewCategory === "accessibility") {
                    return {
                        content: [{ type: "text", text: JSON.stringify({ filtered: "accessibility", guidance: accessibilityGuidance }, null, 2) }],
                    };
                } else if (reviewCategory === "responsive") {
                    return {
                        content: [{ type: "text", text: JSON.stringify({ filtered: "responsive", guidance: responsiveGuidance }, null, 2) }],
                    };
                } else if (reviewCategory === "typography") {
                    return {
                        content: [{ type: "text", text: JSON.stringify({ filtered: "typography", guidance: typographyGuidance }, null, 2) }],
                    };
                } else if (reviewCategory === "color") {
                    return {
                        content: [{ type: "text", text: JSON.stringify({ filtered: "color", guidance: colorGuidance }, null, 2) }],
                    };
                }
            }
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
