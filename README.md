# Ahmed Abrar Zayad - Portfolio 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://my-portfolio-two-hazel-21.vercel.app/)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)](https://react.dev/)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?logo=vite)](https://vitejs.dev/)

> A modern, interactive, and performance-optimized portfolio showcasing my skills, projects, certifications, and experience as a Full-Stack Developer.

**Live Site:** [https://my-portfolio-two-hazel-21.vercel.app/](https://my-portfolio-two-hazel-21.vercel.app/)

---

## ✨ Features

### 🎨 Modern Design
- **Dark Theme** with elegant gradients and glassmorphism effects
- **Smooth Animations** powered by Framer Motion
- **Responsive Layout** that works perfectly on all devices
- **Custom Cursor** for enhanced user experience
- **Scroll Indicators** and parallax effects

### 📱 Sections
- **Hero** - Eye-catching introduction with typewriter effect and animated profile
- **About Me** - Professional background and introduction
- **Experience & Education** - Career timeline and academic achievements
- **Skills** - Interactive orbital tech stack visualization with progress bars
- **Certifications** - 3D flip cards showcasing professional certifications with PDF viewing
- **Projects** - Detailed project showcases with live demos and case studies
- **Contact** - Fully functional contact form with Web3Forms integration

### 🎯 Key Highlights
- ⚡ **Optimized Performance** - Reduced blur effects, simplified animations, and efficient rendering
- 📄 **Downloadable Resume** - Direct CV download functionality
- 📧 **Working Contact Form** - Sends emails directly to ahmedabrarzayad@gmail.com
- 🎓 **Certificate Viewer** - View and download professional certifications
- 🔗 **Social Integration** - Quick access to GitHub, LinkedIn, and other profiles
- 🌟 **Smooth Navigation** - Seamless scrolling with section anchors

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Framer Motion** - Advanced animation library

### Additional Tools
- **Web3Forms** - Contact form backend
- **Phosphor Icons** - Beautiful icon set
- **React Router** - Client-side routing

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - The Web3Forms access key is already configured
   - Update if needed in `src/components/Contact/ContactLayout.jsx`

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── assets/           # Images, PDFs, and static files
│   │   ├── Certifications/
│   │   ├── ProfilePic/
│   │   └── Resume/
│   ├── components/       # React components
│   │   ├── About/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── ExperienceAndEducation/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   └── ...
│   ├── data/            # Project data
│   ├── pages/           # Page components
│   ├── router/          # Routing configuration
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

---

## 🎨 Customization

### Update Personal Information
1. **Contact Details** - Edit `src/components/Contact/ContactLayout.jsx`
2. **Hero Section** - Update `src/components/Hero.jsx`
3. **About Section** - Modify `src/components/About/AboutMe.jsx`
4. **Projects** - Edit `src/data/projectsData.js`
5. **Skills** - Update `src/components/Skills/SkillsLayout.jsx`

### Add Certifications
1. Place PDF files in `src/assets/Certifications/`
2. Update certification data in `src/components/Certifications/CertificationsLayout.jsx`

### Change Theme Colors
- Edit Tailwind configuration in `tailwind.config.js`
- Update primary color in DaisyUI theme

---

## 📧 Contact Form Setup

The contact form uses **Web3Forms** for email delivery:
- **Access Key**: Already configured
- **Sends to**: ahmedabrarzayad@gmail.com
- **Features**: Spam protection, instant delivery, unlimited submissions

To update the email address:
1. Get a new access key from [web3forms.com](https://web3forms.com)
2. Update in `src/components/Contact/ContactLayout.jsx`

---

## 🚀 Deployment

### Vercel (Current)
1. Import your repository into Vercel
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy!

### Other Platforms
- **GitHub Pages**: Use `vite-plugin-static-deploy`
- **Cloudflare Pages**: Connect repository and deploy

---

## 📊 Performance Optimizations

- ✅ Reduced blur effects from `blur-3xl` to `blur-2xl`
- ✅ Removed expensive character-by-character animations
- ✅ Simplified magnetic mouse effects
- ✅ Static background elements instead of animated
- ✅ Optimized typewriter effect
- ✅ Lazy loading for images
- ✅ Reduced particle count in animations

---

## 📝 License

This project is open source and available for personal use.

---

## 👤 Author

**Ahmed Abrar Zayad**
- 🌐 Website: [https://my-portfolio-two-hazel-21.vercel.app/](https://my-portfolio-two-hazel-21.vercel.app/)
- 📧 Email: ahmedabrarzayad@gmail.com
- 📱 Phone: +880 1768 531042
- 💼 LinkedIn: [Your LinkedIn]
- 🐙 GitHub: [Your GitHub]

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Phosphor Icons](https://phosphoricons.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Form backend by [Web3Forms](https://web3forms.com/)

---

Made with ❤️ by Ahmed Abrar Zayad
