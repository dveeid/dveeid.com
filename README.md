# David's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed and SEO
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery
- **Accessibility**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   └── AboutPreview.tsx
│   ├── project/          # Project-related components
│   └── shared/           # Shared components
│       └── Button.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dveeid/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/layout/Header.tsx` - Update name in logo
- `src/components/layout/Footer.tsx` - Update social links and contact info
- `src/app/contact/page.tsx` - Update contact information
- `src/app/about/page.tsx` - Update skills, experience, and personal info
- `src/app/projects/page.tsx` - Update project data

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in `tailwind.config.js`
- Fonts: Change fonts in `src/app/layout.tsx`
- Animations: Modify Framer Motion animations in components

### Content

- **Projects**: Add your projects to the projects array in `src/app/projects/page.tsx`
- **Skills**: Update skills in `src/app/about/page.tsx`
- **Experience**: Modify work experience in `src/app/about/page.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- High contrast ratios
- Screen reader friendly

## 🔧 Performance

- Image optimization with Next.js
- Code splitting
- Lazy loading
- Optimized fonts
- Minimal bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- Email: drn.21777@gmail.com
- Website: https://dveeid.com
- GitHub: https://github.com/dveeid

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
