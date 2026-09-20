<div align="center">


<img width="96" height="96" alt="favicon" src="https://github.com/user-attachments/assets/2d2f029d-389a-4f16-8bfa-8460e33a1d8b" />

# DevPack

### Install and manage Ubuntu packages with a modern interface.

A simple package management experience designed to make discovering and installing software on Ubuntu faster and easier.

<br />

[![Platform](https://img.shields.io/badge/Platform-Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=111827)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](#)

<br />

[Features](#features) · [Installation](#installation) · [Development](#development) · [Roadmap](#roadmap)

</div>

---

## Overview

DevPack is a package installation tool created for Ubuntu users who want a simpler way to discover and install software.

Instead of relying entirely on terminal commands and manually searching for packages, DevPack provides a centralized interface for exploring available packages and quickly finding what you need.

The project is also a practical exploration of building a complete application with React, TypeScript, Vite, Linux and package-management workflows.

## Features

- **Package discovery** — Browse available software in one place.
- **Search** — Quickly find packages without manually navigating through lists.
- **Command Palette** — Navigate and search through the application using a keyboard-first interface.
- **Package pages** — Give each package its own place for relevant information and actions.
- **Theme support** — Switch between light and dark interfaces.
- **Error pages** — Dedicated states for missing pages and unavailable content.
- **Responsive UI** — Designed to remain usable across different screen sizes.

## Preview

<div align="center">
<img width="1910" height="1012" alt="preview" src="https://github.com/user-attachments/assets/2bbf38c3-3afc-4b98-980a-9ebd8bef1d29" />
</div>


## Tech Stack

| Technology   | Purpose                              |
| ------------ | ------------------------------------ |
| React        | User interface                       |
| TypeScript   | Type-safe application development    |
| Vite         | Development server and build tooling |
| React Router | Client-side routing                  |
| Lucide React | Interface icons                      |
| Ubuntu       | Target operating system              |

## Project Structure

```text
devpack/
├── docs/
│   ├── preview.png
│   └── product.md
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── router/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── styles/
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── favicon.svg
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/devpack.git
cd devpack
```

Enter the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## Development

Run the linter:

```bash
npm run lint
```

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Roadmap

- [x] Package browsing
- [x] Package search
- [x] Command palette
- [x] Theme support
- [x] Error pages
- [ ] Package installation
- [ ] Installation progress
- [ ] Package details
- [ ] Package categories
- [ ] Installation history
- [ ] Package updates
- [ ] User-defined packages

## Design Goals

DevPack is being built around a few simple principles:

**Simple**  
The user should be able to find what they need without unnecessary steps.

**Fast**  
Common actions should be easy to access, including through keyboard navigation.

**Clear**  
The interface should communicate package information and application state clearly.

**Maintainable**  
The codebase should remain modular and easy to extend as the project grows.

## Contributing

Contributions are welcome.

If you find a bug, have a feature request, or want to improve the project, open an issue or submit a pull request.

Before submitting a pull request, make sure the project builds successfully and the linter passes.

## License

This project is currently under development.

<div align="center">


<br />


</div><img width="40" height="40" alt="favicon" src="https://github.com/user-attachments/assets/2d2f029d-389a-4f16-8bfa-8460e33a1d8b" />

**DevPack**

*Making Ubuntu package management simpler.*

