# L.I.T. Labs - STEM Education Platform

A modern, responsive website for L.I.T. Labs, an education technology company providing hands-on STEM learning solutions for K-12 schools.

## Project Overview

This project transforms the L.I.T. Labs website into a comprehensive platform showcasing their AI, Robotics, and IoT learning solutions. The site features interactive elements, educational content, and multiple engagement pathways for schools and educators.

## Key Features

### User Experience
- Modern, clean design with STEM-focused visuals
- Full mobile responsiveness
- Animated micro-interactions throughout
- Clear navigation with quick access to key sections

### Educational Content
- Detailed Innovation Stations (Robotics & IoT, AI, Drones, 3D Printing)
- NEP 2020 and NCF 2023 alignment badges
- Project showcase with sample implementations
- Resource library with blog posts and tutorials

### Interactive Elements
- Video tours of labs and classroom projects
- STEM challenge quiz widget
- Virtual demo widgets
- Community forum for educators

### Engagement & Support
- Persistent "Book a Demo" and "Contact" buttons
- WhatsApp chat integration
- Community forum for teachers and schools
- Newsletter signup with confirmation

### Partner Portal
- Secure login for partner schools
- Exclusive resources and training materials
- Progress tracking and analytics
- Technical support access

### Accessibility & SEO
- WCAG 2.1 AA compliance
- Proper contrast ratios and keyboard navigation
- Semantic HTML and structured data
- Dynamic metadata and alt text

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Framer Motion, Lucide React
- **State Management**: React Hooks
- **Routing**: React Router
- **Build Tool**: Vite
- **Deployment**: Static hosting ready

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── assets/             # Images and static assets
├── api/                # API integration services
├── lib/                # Utility functions and schemas
└── hooks/              # Custom React hooks
```

## Key Components

### New Components
- `InnovationStations.tsx` - Technology station showcase
- `GallerySection.tsx` - Achievements and event gallery
- `StickyCTA.tsx` - Persistent call-to-action buttons
- `BlogSection.tsx` - Resource library
- `QuizWidget.tsx` - Interactive STEM quiz
- `WhatsAppChat.tsx` - Customer support chat
- `NewsletterSignup.tsx` - Email subscription
- `LoginPortal.tsx` - Partner school login
- `ContactForm.tsx` - Enhanced contact form
- `CommunityForum.tsx` - Teacher community
- `Accessibility.tsx` - Accessibility statement
- `CRMIntegration.tsx` - Analytics and CRM integration

### Enhanced Components
- `Navbar.tsx` - Improved mobile responsiveness
- `HeroSection.tsx` - Added animations and personalization
- `Solutions.tsx` - Integrated video tours
- `Testimonials.tsx` - Added video support
- `ImpactSection.tsx` - Enhanced image accessibility

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Accessibility

This site is partially conformant with WCAG 2.1 level AA. Features include:
- Sufficient color contrast
- Keyboard navigation support
- Screen reader compatibility
- Alternative text for images
- Proper ARIA attributes

For detailed accessibility information, visit `/accessibility`.

## SEO Features

- Dynamic page titles and meta descriptions
- Structured data (JSON-LD) for rich snippets
- Semantic HTML structure
- Descriptive alt text for all images
- Mobile-responsive design

## Deployment

The site is built as a static application and can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to L.I.T. Labs and should not be distributed without permission.

## Contact

For questions about this project, contact the L.I.T. Labs development team.