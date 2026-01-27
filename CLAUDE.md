# CLAUDE.md - AI Assistant Guide for Portfolio Project

## Project Overview

This is a **portfolio project** repository. The project is in its initial state and ready for development.

**Repository:** portfolio
**Current State:** Initial setup - minimal structure
**Purpose:** Personal/professional portfolio website

---

## Codebase Structure

```
/home/user/portfolio/
├── .git/           # Git repository metadata
├── CLAUDE.md       # AI assistant guidelines (this file)
└── README.md       # Project description
```

### Current Files

| File | Purpose |
|------|---------|
| `README.md` | Project description and documentation |
| `CLAUDE.md` | Guidelines for AI assistants |

---

## Development Guidelines

### Getting Started

This project is in its early stages. When adding functionality:

1. **Discuss technology stack** with the user before implementing
2. **Create appropriate directory structure** based on chosen framework
3. **Initialize package management** (npm, pip, etc.) as needed
4. **Set up configuration files** (.gitignore, linting, formatting)

### Recommended Project Structure (Web Portfolio)

If building a web-based portfolio, consider this structure:

```
portfolio/
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components/routes
│   ├── styles/        # CSS/styling files
│   ├── assets/        # Images, fonts, static files
│   └── utils/         # Helper functions
├── public/            # Static public assets
├── tests/             # Test files
├── package.json       # Dependencies (if JS/TS)
├── .gitignore         # Git ignore rules
├── .env.example       # Environment variable template
└── README.md          # Project documentation
```

---

## Conventions to Follow

### Code Style

- **Consistency**: Match existing code style when modifying files
- **Clarity**: Write self-documenting code with meaningful names
- **Simplicity**: Avoid over-engineering; implement only what's needed
- **Comments**: Add comments only where logic isn't self-evident

### Git Practices

- **Commit messages**: Use clear, descriptive messages
  - Format: `type: brief description`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Branch naming**: Use descriptive branch names
- **Small commits**: Make atomic commits for logical changes

### File Naming

- **Components**: PascalCase (e.g., `NavBar.tsx`, `ProjectCard.vue`)
- **Utilities**: camelCase (e.g., `formatDate.js`, `apiClient.ts`)
- **Styles**: Match component names or use kebab-case
- **Config files**: lowercase with appropriate extensions

---

## Common Tasks

### Adding a New Feature

1. Understand the requirements fully before coding
2. Plan the implementation approach
3. Create necessary files and directory structure
4. Implement the feature incrementally
5. Test the functionality
6. Commit with a descriptive message

### Modifying Existing Code

1. **Always read the file first** before making changes
2. Understand the context and dependencies
3. Make minimal, focused changes
4. Preserve existing patterns and conventions
5. Test that changes don't break functionality

### Setting Up Development Environment

When the project has dependencies:

```bash
# JavaScript/TypeScript projects
npm install        # or yarn install, pnpm install

# Python projects
pip install -r requirements.txt

# Run development server (varies by framework)
npm run dev        # Common for JS frameworks
python manage.py runserver  # Django
```

---

## Technology Stack Considerations

### Recommended for Portfolio Projects

**Frontend Frameworks:**
- React, Vue, Svelte, or Next.js for dynamic sites
- Astro or Hugo for static sites
- Plain HTML/CSS/JS for simplicity

**Styling:**
- Tailwind CSS for utility-first approach
- CSS Modules or Styled Components for scoped styles
- Plain CSS for simpler projects

**Hosting Suggestions:**
- Vercel, Netlify for frontend
- GitHub Pages for static sites

### When Choosing Technology

- Consider the user's familiarity and preferences
- Match complexity to project requirements
- Prioritize maintainability over trends

---

## Security Guidelines

- **Never commit secrets** (API keys, passwords, tokens)
- **Use environment variables** for sensitive configuration
- **Add sensitive files to .gitignore** immediately
- **Sanitize user inputs** if any forms are added
- **Use HTTPS** for any external API calls

---

## Testing Approach

When tests are added:

1. **Unit tests** for utility functions and logic
2. **Component tests** for UI components (if applicable)
3. **Integration tests** for feature workflows
4. Place tests in `tests/` directory or alongside source files

---

## Important Notes for AI Assistants

### Do's

- ✅ Read files before modifying them
- ✅ Ask clarifying questions when requirements are unclear
- ✅ Follow existing patterns and conventions
- ✅ Make incremental, testable changes
- ✅ Provide clear explanations of changes made
- ✅ Use appropriate tools (Read, Edit, Write) instead of bash for file operations

### Don'ts

- ❌ Don't add features beyond what's requested
- ❌ Don't over-engineer solutions
- ❌ Don't guess file contents - always read first
- ❌ Don't commit sensitive information
- ❌ Don't make assumptions about technology preferences without asking
- ❌ Don't create unnecessary documentation files

### When Starting Development

1. **Ask the user** about their preferred technology stack
2. **Understand the vision** for the portfolio (content, style, features)
3. **Start simple** and iterate based on feedback
4. **Document setup** in README.md as the project evolves

---

## Quick Reference

### Useful Commands

```bash
# Git operations
git status                    # Check current state
git add <file>                # Stage specific file
git commit -m "type: message" # Commit changes
git push -u origin <branch>   # Push to remote

# File exploration
ls -la                        # List all files
tree -L 2                     # Directory structure (if available)
```

### Project URLs

- **Repository:** Check git remote configuration
- **Live Site:** To be determined after deployment

---

## Changelog

| Date | Change |
|------|--------|
| 2026-01-27 | Initial CLAUDE.md created |

---

*This file should be updated as the project evolves to reflect the current state, conventions, and workflows.*
