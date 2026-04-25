# Aryan Dwivedi — Dashboard

A React portfolio dashboard with the warm minimal design system from the original HTML prototype.

## Setup

```bash
npm install
npm start
```

## Build for production

```bash
npm run build
```

## Project structure

```
src/
  components/
    Sidebar.jsx       # Left navigation panel
    Panel.jsx         # Shared Panel, PanelTitle, PageHeader components
    OverviewPage.jsx  # Impact dashboard with usage bars & highlights
    ProjectsPage.jsx  # Project cards grid
    AnalyticsPage.jsx # Charts (bar, line, donut) via Chart.js
  data/
    projects.js       # All project data, chart data
  App.jsx             # Root with page routing state
  index.js            # Entry point
  index.css           # Global styles + CSS variables (design tokens)
public/
  index.html
```

## Design tokens

All colors, radii, and typography are defined as CSS variables in `src/index.css`:

- `--color-background-primary` / `secondary` / `tertiary`
- `--color-text-primary` / `secondary` / `tertiary` / `success`
- `--color-border-tertiary` / `secondary` / `primary`
- `--border-radius-lg` / `md`
- Fonts: **Instrument Serif** (headings/italic accents) + **DM Sans** (body)

## Customizing

- Edit project data in `src/data/projects.js`
- Add new pages by creating a component in `src/components/` and registering it in `App.jsx`
