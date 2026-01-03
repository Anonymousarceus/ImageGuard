# ImageGuard - AI-Powered Image Tampering Detection

## Project Overview
A modern, responsive React application for detecting image tampering using AI technology. Built with Vite, TypeScript, and Tailwind CSS.

## Key Features
- Advanced AI-powered image analysis
- Drag-and-drop file upload with preview
- Real-time tampering detection
- Responsive design for all devices
- Batch processing capabilities
- Detailed analysis reports with confidence scores
- Modern UI/UX with smooth animations

## Technology Stack
- React 18 with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- Framer Motion for animations
- React Dropzone for file uploads
- React Icons for iconography

## Project Structure
```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Sidebar.tsx         # Feature sidebar
│   └── ImageUploadArea.tsx # Upload and analysis component
├── App.tsx                 # Main application
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Responsive Design
The application is fully responsive and works across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Future ML Integration
The frontend is prepared for ML model integration. Replace the mock analysis in `ImageUploadArea.tsx` with actual API calls to your machine learning backend.