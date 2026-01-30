# 🚗 Modkas Auto Garage

A modern, responsive landing page for **Modkas Auto Garage** - specialist auto repair services for German vehicles (VW, Audi, and Skoda).

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://modkas-garage.vercel.app)
[![GitHub](https://img.shields.io/badge/repo-github-blue)](https://github.com/b1aiirrr/Modkas-AG)

## 🌟 Features

- **Modern Design** - Sleek, professional UI with silver/black/orange color scheme
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **WhatsApp Integration** - Direct booking with pre-filled diagnostic request message
- **Service Showcase** - Detailed presentation of core services
- **Vehicle Gallery** - Specialized sections for VW, Audi, and Skoda
- **Trust Signals** - Certifications and expertise highlights
- **Legal Modals** - Privacy Policy and Terms of Service
- **Fast Performance** - Built with Vite for optimal load times
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Version Control**: Git & GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/b1aiirrr/Modkas-AG.git
   cd Modkas-AG
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
modkas-garage/
├── public/              # Static assets
│   ├── logo.png
│   ├── hero.png
│   ├── vw.png
│   ├── audi.png
│   └── skoda.png
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── VehicleGallery.jsx
│   │   ├── TrustSignals.jsx
│   │   ├── ValueProposition.jsx
│   │   ├── Footer.jsx
│   │   └── LegalModal.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind imports
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Key Components

### Navbar
- Sticky navigation with logo
- Service links and WhatsApp CTA button

### Hero Section
- Eye-catching headline with background image
- Direct WhatsApp booking button
- Trust indicators (Certified Techs, Advanced Tools)

### Services
- Four core services with hover effects:
  - Computerized Diagnostics
  - Genuine Parts Replacement
  - Body Work & Restoration
  - Professional Paint & Finish

### Vehicle Gallery
- Dedicated sections for VW, Audi, and Skoda
- Visual representation of specialized expertise

### Footer
- Contact information
- Quick links
- Legal documents (Privacy Policy, Terms of Service)

## 📱 WhatsApp Integration

The "Book Diagnostic" button opens WhatsApp with a pre-filled message:

```
Hello Modkas Auto Garage,

I would like to book a computerized diagnostic service for my vehicle.

Vehicle Make/Model: 
Year: 
Current Issues/Concerns: 

Please let me know your availability. Thank you!
```

**Phone Number**: +254 722 785494

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:

- **Brand Black**: `#0A0A0A`
- **Brand Dark**: `#141414`
- **Brand Orange**: `#FF6B35`

### Updating Content
- **Services**: Edit `src/components/Services.jsx`
- **Contact Info**: Edit `src/components/Footer.jsx`
- **Hero Content**: Edit `src/components/Hero.jsx`

## 🌐 Deployment

### Vercel (Recommended)

The project is configured for seamless Vercel deployment:

```bash
vercel --prod
```

Or push to the main branch and Vercel will auto-deploy.

**Live Site**: https://modkas-garage.vercel.app

### Manual Deployment

After building (`npm run build`), deploy the `dist/` folder to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📄 License

This project is private and proprietary to Modkas Auto Garage.

## 👤 Contact

**Modkas Auto Garage**
- 📞 Phone: +254 722 785494
- 📍 Location: Nairobi, Kenya
- 🌐 Website: [modkas-garage.vercel.app](https://modkas-garage.vercel.app)

---

Built with ❤️ for German auto enthusiasts in Kenya
