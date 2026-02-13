# PristineCare - Professional Cleaning Agency Website

A modern, fully responsive, and production-ready cleaning agency website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark Mode**: Toggle between light and dark themes with persistent user preference
- **Dynamic Image Loading**: High-quality images fetched from Unsplash API
- **Smooth Animations**: Professional animations using Framer Motion
- **Form Validation**: Client-side validation for contact and booking forms
- **Sticky CTA**: Persistent booking button for mobile and desktop users

### Sections

1. **Hero Section**
   - Full-width banner with headline and call-to-action
   - Dynamic background image from Unsplash
   - Scroll indicator with smooth animations
   - Trust indicators and key features

2. **Services Section**
   - 6 service cards with hover effects
   - Dynamic images for each service
   - Feature lists and quick descriptions
   - Responsive grid layout

3. **About Section**
   - Company mission and values
   - Team member profiles with images
   - Achievement statistics
   - Call-to-actions

4. **Testimonials Section**
   - Carousel/slideshow functionality
   - Auto-play with manual controls
   - 5-star rating display
   - Customer testimonials with images

5. **Pricing Section**
   - 3 pricing tiers (Basic, Standard, Premium)
   - Feature comparison
   - Highlighting for most popular plan
   - Additional package information

6. **Contact Section**
   - Contact information display
   - Form validation with error handling
   - Google Maps integration
   - Quick response time guarantee

7. **Footer**
   - Company information and contact details
   - Quick links and resources
   - Social media links
   - Newsletter signup
   - Scroll-to-top button

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PristineCare
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically in your browser on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
PristineCare/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx        # About and team section
│   │   ├── Contact.tsx      # Contact form and info
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Hero banner section
│   │   ├── Navigation.tsx   # Navigation bar
│   │   ├── Pricing.tsx      # Pricing tiers
│   │   ├── Services.tsx     # Services cards
│   │   ├── StickyBooking.tsx # Floating booking button
│   │   └── Testimonials.tsx # Testimonials carousel
│   ├── App.tsx              # Main App component
│   ├── index.css            # Global styles with Tailwind
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefixes

### Icons
- **Lucide React**: Beautiful, consistent icon library

### API Integration
- **Unsplash API**: High-quality image sourcing

## 🎨 Design System

### Color Palette
- **Primary**: Teal/Green (#31a69c)
- **Accent**: Amber/Gold (#f59e0b)
- **Neutral**: Gray shades (light/dark modes)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Typography
- Font Family: Inter (via Google Fonts)
- Font Sizes: Responsive scaling
- Font Weights: 400, 500, 600, 700, 800

## 📋 Form Validation

### Contact Form Fields
- **Name**: Required, non-empty
- **Email**: Required, valid email format
- **Phone**: Required, valid phone number (10+ digits)
- **Service**: Required, selection from dropdown
- **Date**: Required, must be future date
- **Message**: Optional

## 🖼️ Image Sources

All images are dynamically loaded from Unsplash:
- Hero: Professional cleaning service image
- Services: Category-specific cleaning images
- Team: Avatar/portrait images
- Testimonials: Profile pictures

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📱 Mobile Optimization

- Touch-friendly buttons and links
- Mobile-optimized navigation menu
- Lazy loading images
- Responsive typography
- Floating action buttons for mobile

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alt text for all images

## 📊 Performance Optimization

- Code splitting with Vite
- Lazy image loading
- Optimized bundle size
- CSS purging with Tailwind
- Tree-shaking for unused code

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 🔐 Security Considerations

- No sensitive data in client-side code
- HTTPS recommended for production
- Form validation prevents XSS attacks
- Content Security Policy headers recommended
- Regular dependency updates

## 🔧 Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Development Best Practices
- Use ESLint for code quality
- Follow TypeScript strict mode
- Component-based architecture
- Reusable utility functions
- Clear code comments

## 📝 Customization

### Change Company Information
Edit the following files:
- Footer contact info in `src/components/Footer.tsx`
- Contact form details in `src/components/Contact.tsx`
- About section in `src/components/About.tsx`

### Modify Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Add New Sections
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to main section

### Replace Images
Update Unsplash URLs in components:
```typescript
const image = 'https://images.unsplash.com/...'
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is provided as-is for portfolio purposes.

## 📞 Support

For questions or issues, please reach out through:
- Email: info@pristinecare.com
- Phone: (555) 123-4567
- Website: https://pristinecare.com

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] Payment processing
- [ ] Booking system
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Customer reviews database
- [ ] Service area expansion
- [ ] Multi-language support
- [ ] Blog section
- [ ] Photo gallery

## 📈 Performance Metrics

Target metrics:
- Lighthouse Score: 90+
- Page Load Time: < 3 seconds
- Core Web Vitals: All green
- Mobile Score: 85+

## 🔄 Version History

- v1.0.0 - Initial release
  - Complete website with all core sections
  - Dark mode support
  - Responsive design
  - Form validation
  - Dynamic image loading

---

Built with ❤️ for a cleaner world.
