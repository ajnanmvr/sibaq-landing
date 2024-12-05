# Sibaq 2025 - Landing Page Project  

An open-source landing page project for **Sibaq 2025 Darul Huda National Arts Fest**. This project serves as the central online hub for event updates, schedules, results, and more.  

## Getting Started  

First, run the development server:  

```bash  
npm run dev  
# or  
yarn dev  
# or  
pnpm dev  
# or  
bun dev  
```  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.  

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.  

## File Structure  

The project is organized as follows:  

```
.
├── node_modules/          # Installed dependencies  
├── public/                # Static assets  
│   ├── downloads/         # Downloadable resources (e.g., forms, bylaws)  
│   └── gallery/           # Event images and media files  
├── src/                   # Main source code  
│   ├── app/               # Next.js App Router files  
│   ├── assets/            # Project assets  
│   │   ├── static/        # Static files (e.g., images, documents)  
│   │   └── vector/        # SVG and vector graphics  
│   ├── components/        # Reusable UI components  
│   ├── fonts/             # Custom and imported fonts  
│   ├── graphql/           # GraphQL queries and mutations  
│   ├── hooks/             # Custom React hooks  
│   ├── libs/              # Utility and configuration files  
│   │   ├── constants.ts       # Application constants  
│   │   ├── downloads.json     # Downloads data  
│   │   ├── eliminationHosts.ts# Elimination hosts configuration  
│   │   ├── notifications.json # Notifications data  
│   │   ├── schedule.json      # Schedule data  
│   │   ├── socialMediaLinks.ts# Social media links configuration  
│   │   └── types.ts           # TypeScript types  
│   └── utils/             # Shared utility functions  
│       └── autoColor.ts       # Auto color utility  
├── .env.local             # Local environment variables  
├── .eslintrc.json         # ESLint configuration  
├── .gitignore             # Git ignored files and folders  
├── next-env.d.ts          # TypeScript Next.js environment  
├── next.config.mjs        # Next.js configuration  
├── package.json           # Project metadata and dependencies  
├── postcss.config.mjs     # PostCSS configuration  
├── README.md              # Project documentation  
├── tailwind.config.ts     # Tailwind CSS configuration  
├── tsconfig.json          # TypeScript configuration  
└── yarn.lock              # Yarn lockfile for dependencies
```  

## Branch Strategy  

This project follows a **central repository model** with three main branches:  

- `dev`:  
  - Open for collaboration, used for developing new features and fixing bugs.  
  - Serves as the development environment.  

- `beta`:  
  - Hosted branch where the source code of `HEAD` reflects the latest delivered changes for the next release.  
  - Used for testing and quality assurance.  

- `pro`:  
  - Hosted branch where the source code of `HEAD` reflects the stable and production-ready version of the application.  

### Commit Message Types  

Use the following conventional commit message types:  

- **feat**: Adds new features or significant improvements.  
  - Example: `feat(column): Added new feature.`  

- **fix**: Resolves bugs or improves reliability.  
  - Example: `fix(case): Fixed case sensitivity issue in search functionality for accurate results.`  

- **docs**: Updates documentation.  
  - Example: `docs(readme): Updated README file with installation instructions.`  

- **style**: Code style changes without impacting functionality.  
  - Example: `style(format): Corrected indentation and added missing semicolons.`  

- **refactor**: Refactors code for better maintainability.  
  - Example: `refactor(variables): Renamed variables for improved clarity.`  

- **test**: Adds or updates tests without affecting production code.  
  - Example: `test(login): Added tests for user login functionality.`  

- **chore**: Updates build tasks or non-production code.  
  - Example: `chore(grunt): Updated Grunt tasks for better build process efficiency.`  

## Pull Request Flow  

1. All pull requests should target the `dev` branch (feature or bug-fix).  
2. After review, changes are merged into:  
   - `beta` for testing new features and upcoming releases.  
   - `pro` for production-ready updates.  

## Role-Based Workflow  

- **Quality Tester**:  
  - Verify the `beta` branch for testing upcoming features.  
  - Verify the `pro` branch for already deployed features.  

## Learn More  

To learn more about Next.js, check the following resources:  

- [Next.js Documentation](https://nextjs.org/docs)  
- [Learn Next.js](https://nextjs.org/learn)  
