# Page Design Guide MCP Server

An MCP (Model Context Protocol) server that provides design guidance to help LLMs generate better, more modern web pages. This server focuses on teaching design principles and best practices rather than providing code templates.

## Features

- [layout] **Layout Guidance** - When and how to use F-Pattern, Z-Pattern, Bento Grid, etc.
- [palette] **Color Psychology** - Color meanings, scheme types, and palette recommendations
- [type] **Typography** - Hierarchy, font pairings, and readability best practices
- [grid] **Responsive Design** - Mobile-first strategies and breakpoint guidance
- [layers] **Visual Hierarchy** - Principles of contrast, whitespace, alignment
- [component] **Component Guidance** - Design principles for buttons, cards, forms, navigation
- [motion] **Animation Principles** - Timing, purpose, and performance considerations
- [accessibility] **Accessibility** - WCAG compliance, contrast ratios, semantic HTML
- [sparkles] **Modern Trends** - Current design trends and when to use them
- [check] **Design Review** - Analyze design descriptions and get recommendations

## Installation

Install the package globally via npm:

```bash
npm install -g page-design-guide-mcp
```

Or install it locally in your project:

```bash
npm install page-design-guide-mcp
```

## Setup with Claude Desktop

Add this to your Claude Desktop configuration file:

**MacOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### Option 1: Global Installation (Recommended)

```json
{
  "mcpServers": {
    "page-design-guide": {
      "command": "npx",
      "args": ["-y", "page-design-guide-mcp"]
    }
  }
}
```

### Option 2: Local Installation

```json
{
  "mcpServers": {
    "page-design-guide": {
      "command": "node",
      "args": ["/absolute/path/to/node_modules/page-design-guide-mcp/build/index.js"]
    }
  }
}
```

Replace `/absolute/path/to` with the actual path to your project's `node_modules` directory.

## Usage

Once connected, you can ask Claude questions like:

- "What design principles should I follow for this landing page?"
- "Which layout works best for a portfolio site?"
- "What colors convey trust and professionalism?"
- "How should I structure the hero section?"
- "What are common mistakes to avoid with typography?"
- "How do I make this accessible?"
- "Review my design approach for this e-commerce page"

## Available Tools

### `get_design_principles`
Get foundational design principles (hierarchy, whitespace, contrast, alignment, etc.) with guidelines and common mistakes to avoid.

### `get_layout_guidance`
Get layout recommendations based on page type. Explains when and why to use F-Pattern, Z-Pattern, Bento Grid, Split Screen, etc.

### `get_color_guidance`
Get color psychology, scheme types (monochromatic, complementary, etc.), and palette recommendations based on mood and industry.

### `get_typography_guidance`
Get typography hierarchy, font pairing recommendations for different styles, and best practices for readable text.

### `get_section_guidance`
Get guidance for specific page sections: header, hero, features, testimonials, pricing, cta, footer, faq - including purpose, structure, and best practices.

### `get_responsive_guidance`
Get responsive design principles, breakpoint strategies, and mobile-first best practices.

### `get_component_guidance`
Get design guidance for UI components: buttons, cards, forms, navigation, modals, icons - including sizing, states, and accessibility.

### `get_animation_guidance`
Get animation principles, timing guidelines, and performance considerations for different types of motion.

### `get_accessibility_guidance`
Get accessibility requirements including contrast ratios, focus states, semantic HTML, and motion preferences.

### `get_modern_trends`
Get current web design trends (2024-2026) with guidance on when and how to use them appropriately.

### `review_design_approach`
Describe your design and get feedback with scores, identified strengths, concerns, and recommendations.

## Project Structure

```
page-design-guide-mcp/
├── src/
│   └── index.ts          # Main MCP server code
├── build/                # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## Development

For development with auto-rebuild on changes:

```bash
npm run watch
```

## Requirements

- Node.js >= 18.0.0
- Claude Desktop app

## License

MIT