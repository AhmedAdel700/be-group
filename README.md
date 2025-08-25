# 🤖 Robotics Landing Page

A modern, interactive robotics platform built with Next.js, featuring 3D robot visualizations, multi-language support, and a responsive design. This project combines cutting-edge web technologies to create an immersive educational experience for robotics enthusiasts.

## ✨ Features

- **3D Robot Visualizations**: Interactive 3D models powered by Spline
- **Internationalization**: Multi-language support (English/Arabic)
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with next-themes
- **Type Safety**: Full TypeScript implementation
- **Docker Support**: Containerized deployment ready
- **Statistics Dashboard**: Real-time data visualization
- **Research Section**: Academic resources and publications

## 🏗️ Project Structure

```
robotics/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Internationalized routes
│   │   │   ├── layout.tsx      # Root layout
│   │   │   └── page.tsx        # Home page
│   │   └── theme/
│   │       └── ThemeProvidors.tsx
│   ├── components/
│   │   ├── SplineRobot.tsx     # 3D robot component
│   │   ├── about/              # About section components
│   │   ├── explore/            # Exploration features
│   │   ├── footer/             # Footer component
│   │   ├── header/             # Navigation header
│   │   ├── hero/               # Hero section
│   │   ├── research/           # Research showcase
│   │   ├── statistics/         # Data visualization
│   │   ├── themeSwitch/        # Theme toggle
│   │   └── ui/                 # Reusable UI components
│   ├── i18n/
│   │   └── request.ts          # Internationalization config
│   ├── lib/
│   │   ├── metadata.ts         # SEO metadata
│   │   └── utils.ts            # Utility functions
│   ├── utils/
│   │   └── formatDateByLocale.ts
│   ├── middleware.ts           # Next.js middleware
│   └── navigations.ts          # Navigation configuration
├── messages/
│   ├── en/                     # English translations
│   └── ar/                     # Arabic translations
├── public/                     # Static assets
├── docker-compose.yaml         # Docker composition
├── Dockerfile                  # Container definition
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd robotics
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Or build manually**
   ```bash
   docker build -t robotics-platform .
   docker run -p 3000:3000 robotics-platform
   ```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

## 🎨 Tech Stack

### Frontend
- **Framework**: Next.js 14.2.30
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **3D Graphics**: Spline (@splinetool/react-spline)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Features & Utilities
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **Form Handling**: React Hook Form + Zod validation
- **Authentication**: NextAuth.js
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel
- **Notifications**: Sonner

### Development Tools
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Containerization**: Docker

## 🌍 Internationalization

The project supports multiple languages:

- **English** (en)
- **Arabic** (ar)

Translation files are located in the `messages/` directory. To add a new language:

1. Create a new folder in `messages/` (e.g., `messages/es/`)
2. Copy the JSON files from an existing language
3. Translate the content
4. Update the middleware configuration

## 🎯 Components Overview

### Core Components

- **SplineRobot**: Interactive 3D robot visualization
- **Hero**: Landing page hero section with animations
- **About**: Information about the robotics platform
- **Research**: Academic research and publications showcase
- **Statistics**: Data visualization and metrics
- **Explore**: Interactive exploration features

### UI Components

Built with Radix UI primitives:
- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Carousels, Avatars, Badges
- And many more...

## 🐳 Docker Configuration

The project includes Docker support with:

- **Multi-stage build** for optimized production images
- **docker-compose.yaml** for easy orchestration
- **Environment variable** support
- **Health checks** and proper signal handling

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first design approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized performance on all devices

## 🔧 Configuration

### Next.js Configuration

- **Image optimization** with custom domains
- **Internationalization** plugin integration
- **Build optimization** settings

### Tailwind Configuration

- **Custom theme** extensions
- **Animation** utilities
- **Component** variants
- **Dark mode** support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
