# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js.

## 🚀 Features

- **Modern Design**: Clean, professional portfolio layout
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Vite and modern web technologies
- **Interactive**: Smooth animations and transitions
- **Backend API**: Express.js server for dynamic content

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **UI Components**: Radix UI, Lucide Icons
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Akki-333/PortfolioSite.git
cd PortfolioSite
```

2. Install dependencies:
```bash
npm install
cd client && npm install && cd ..
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser.

## 🚀 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository: `Akki-333/PortfolioSite`

2. **Configure Build Settings**:
   - **Framework Preset**: Select "Other"
   - **Root Directory**: Leave as `./` (root)
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

3. **Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Option 2: Manual Deployment

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts**:
   - Link to existing project or create new
   - Configure settings as above

## 📁 Project Structure

```
PortfolioSite/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                 # Express.js backend
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage utilities
├── shared/                 # Shared types and schemas
├── attached_assets/        # Resume and other assets
├── vercel.json            # Vercel configuration
└── package.json           # Root package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run vercel-build` - Build for Vercel deployment

## 🌐 Live Demo

Your portfolio will be available at: `https://your-project-name.vercel.app`

## 📝 Customization

1. **Personal Information**: Update content in `client/src/components/sections/`
2. **Styling**: Modify styles in `client/src/index.css` and component files
3. **Assets**: Replace images in `client/public/` and `attached_assets/`
4. **Resume**: Update `client/public/Akshay_Resume.pdf`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Need help?** Feel free to open an issue or contact me directly!
