# My Portfolio Website

This is my personal portfolio website built with React, TypeScript, and Vite.

## Featured Projects

### Atomic Habits Agent
A comprehensive habit tracking and building application inspired by James Clear's "Atomic Habits" book. This project helps users track, build, and maintain positive habits through consistent monitoring and feedback.

**Key Features:**
- User Authentication: Secure signup, login, and user management
- Habit Management: Create, update, delete, and track habits
- Progress Tracking: Visual representation of habit formation progress
- Streak Monitoring: Track consecutive days of habit completion
- Responsive Design: Works on desktop and mobile devices
- Data-Driven Insights: Analytics to help users understand their habit patterns
- Personalized Recommendations: Coming soon via RAG pipeline integration

**Repository:** [https://github.com/sairamkiran9/atomic-habits-agent](https://github.com/sairamkiran9/atomic-habits-agent)

### AttnGAN-trans
Transformer models for enhancing AttnGAN based text-to-image generation - research paper implementation.

**Key Features:**
- Implementation of the research paper on improving text-to-image generation
- Integration of Transformer models with AttnGAN architecture
- Enhanced semantic consistency between text descriptions and generated images
- Improved image quality and text alignment
- Experimentation framework for comparing different model variations

**Repository:** [https://github.com/sairamkiran9/AttnGAN-trans](https://github.com/sairamkiran9/AttnGAN-trans)

### Network Emulator Java
An end-to-end OSI layer client to client communication simulator in Java.

**Key Features:**
- Simulates all 7 layers of the OSI model
- Demonstrates packet encapsulation and decapsulation
- Handles routing and addressing
- Implements error detection and correction
- Shows the flow of data through each layer

**Repository:** [https://github.com/sairamkiran9/Network-Emulator-Java](https://github.com/sairamkiran9/Network-Emulator-Java)

### Other Featured Projects
- CancerKG.ORG: A knowledge graph based search engine with 13M+ nodes
- CookBuddy: A scalable AI based recipe recommender platform hosted on AWS
- CredManager: A secure password management tool for storing and sharing passwords securely

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
