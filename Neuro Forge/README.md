# AI Productivity Copilot for Builders

An AI-powered productivity assistant designed to help developers, students, and technical builders improve their efficiency, learning speed, and workflow quality.

## Overview

The AI Productivity Copilot tracks developer activity from multiple sources (manual logs, GitHub integration, and VS Code extension), analyzes this data using AI agents to detect bottlenecks, repeated errors, inefficiencies, and skill gaps. Based on this analysis, it generates intelligent insights, productivity scores, workflow recommendations, and personalized daily action plans.

## Features

- **Activity Tracking**: Manual logging, GitHub integration, and VS Code extension telemetry
- **AI Analysis**: Detect bottlenecks, repeated errors, and workflow inefficiencies
- **Productivity Insights**: AI-generated recommendations and productivity scores
- **Daily Plans**: Personalized action plans with high-impact tasks and learning goals
- **Dashboard**: Comprehensive visualization of your productivity metrics

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd ai-productivity-copilot

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```sh
npm run build
```

### Run Tests

```sh
npm test
```

## Technology Stack

- **Frontend**: React 18 + Vite + TypeScript
- **UI Components**: Radix UI + Tailwind CSS
- **Charts**: Recharts
- **Routing**: React Router
- **State Management**: TanStack Query

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── lib/            # Utilities and types
├── hooks/          # Custom React hooks
└── App.tsx         # Main application component
```

## Development

The project uses:
- Vite for fast development and optimized builds
- TypeScript for type safety
- ESLint for code quality
- Vitest for testing

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
