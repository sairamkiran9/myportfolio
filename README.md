# My Portfolio Website

This is my personal portfolio website built with React, TypeScript, and Vite.

## Development

### Running the project

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### Project Structure

- `src/` - Source code
  - `components/` - React components
  - `styles/` - CSS styles
  - `assets/` - Images and other assets
- `public/` - Static files that are copied to the build folder

### Adding Projects

To add a new project, update the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: `${baseUrl}assets/image.jpg`, // Add image to public/assets/
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/username/project",
    live: "https://project-demo-url.com/"
  },
  // ... other projects
];
```

## Technical Details

This portfolio is built with:

- **React**: For building user interfaces
- **TypeScript**: For type safety
- **Vite**: For fast development and optimized builds
- **Tailwind CSS**: For styling
- **Framer Motion**: For animations
- **React Intersection Observer**: For scroll-based animations
- **Lucide React**: For icons
- **GitHub Pages**: For hosting

## Deployment

This portfolio is configured to deploy to GitHub Pages. The deployment is handled by the `gh-pages` package and the `deploy` script in `package.json`.

To deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and push the build files to the `gh-pages` branch of your repository.
