# Lendsqr Admin Dashboard

A modern, responsive admin dashboard built with Next.js 14, TypeScript, and SCSS. This application provides a comprehensive interface for managing lending operations, user data, and financial metrics.

## Quick Links 🔗

- ✨ **Live Demo**: [View Application](https://lendsqr-admin-dashboard.vercel.app)
- 🎥 **Video Demo**: [Watch Demo](https://www.loom.com/share/your-loom-video-id)
- 💻 **GitHub Repository**: [View Code](https://github.com/your-username/lendsqr-fe-test-v1)

## Features

- **Authentication System**

  - Secure login with form validation
  - Protected routes with AuthGuard
  - Session persistence

- **Dashboard Analytics**

  - Real-time loan performance metrics
  - User activity tracking
  - Loan distribution visualization
  - Transaction monitoring

- **User Management**

  - Comprehensive user list with filtering
  - Detailed user profiles
  - User status management (Active/Blacklist)
  - User statistics and metrics

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts
  - Collapsible sidebar
  - Responsive data tables

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **State Management**: React Query
- **Form Handling**: React Hook Form + Zod
- **Charts**: Recharts
- **Testing**: Jest + React Testing Library
- **Icons**: Lucide React
- **Authentication**: Custom JWT implementation
- **API Integration**: Axios

## Getting Started

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd lendsqr-fe-test-v1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
lendsqr-fe-test-v1/
├── app/                   # Next.js app directory
│   ├── (auth)/           # Authentication routes
│   ├── (dashboard)/      # Dashboard routes
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
├── context/             # React context definitions
├── hooks/               # Custom React hooks
├── lib/                # Utility libraries
├── providers/          # React providers
├── public/             # Static assets
├── services/           # API services
├── styles/             # SCSS styles
├── types/              # TypeScript definitions
└── utils/              # Helper functions
```

## Key Components

- **AuthGuard**: Protects routes requiring authentication
- **Dashboard**: Main analytics and metrics display
- **UserTable**: Interactive user management interface
- **LoanPerformance**: Loan metrics visualization
- **FilterMenu**: Advanced filtering system

## Authentication

The application uses a custom authentication system with JWT tokens:

- Login credentials (demo):
  - Email: admin@lendsqr.com
  - Password: password123

## Styling

The project uses SCSS with:

- Custom variables and mixins
- Responsive breakpoints
- Component-scoped styles
- CSS Grid and Flexbox layouts

## Testing

Run the test suite:

```bash
npm test
```

Coverage reports are generated in the `/coverage` directory.

## Development Practices

- **Code Quality**: ESLint and TypeScript for code quality
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and semantic HTML
- **Testing**: Unit tests for critical components

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment

The application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy using Vercel CLI or GitHub integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
