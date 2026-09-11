# 🌌 Nuro - Static Website

A modern, static website with a captivating space theme. No servers, no API dependencies—just pure HTML, CSS, and JavaScript compiled to static files.

## ✨ Features

- 🌌 Beautiful space-themed design
- ⚡ Ultra-fast static site (zero server overhead)
- 📱 Fully responsive design
- 🎨 Dark mode optimized
- 🚀 Deploy anywhere (GitHub Pages, Netlify, Vercel static, etc.)

## 🛠️ Tech Stack

- **Framework**: Next.js (with static export)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Deployment**: Static HTML/CSS/JS

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
# Clone repository
git clone https://github.com/brp-alt/nuro.git
cd nuro

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates static files in the `out/` directory that can be deployed anywhere.

## 📦 Deployment

### GitHub Pages
```bash
npm run build
git add out/
git commit -m "Build static site"
git push
```

### Netlify
Connect your repository to Netlify. Set build command to `npm run build` and publish directory to `out`.

### Vercel
```bash
vercel
```

## 📂 Project Structure

```
nuro/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # Reusable components (if needed)
├── public/               # Static assets
├── tailwind.config.ts    # TailwindCSS config
└── next.config.js        # Next.js config (with static export)
```

## 🎯 Key Changes

✅ Static export enabled in `next.config.js`
✅ Removed API routes and server dependencies
✅ Replaced interactive chat with landing page
✅ Removed zustand, axios, and openai dependencies
✅ Removed external API configuration

## 📄 License

MIT

---

**Made with 🌌 and ⚡**
