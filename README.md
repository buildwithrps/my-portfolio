# Rabindra Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, designed to showcase skills, projects, and experience.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Static Export**: Optimized for GitHub Pages deployment
- **Performance**: Fast loading with optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML
- **Contact Form**: Ready for Formspree or EmailJS integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Rowbeendra/rabindra-portfolio.git
cd rabindra-portfolio
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

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The GitHub Actions workflow will automatically build and deploy your site

3. **Your site will be available at**:
   `https://rowbeendra.github.io/rabindra-portfolio`

### Manual Deployment

If you prefer manual deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## ⚙️ Configuration

### Customization

1. **Personal Information**: Update the constants at the top of `app/page.tsx`:
   - `NAME`, `ROLE`, `TAGLINE`
   - `EMAIL`, `PHONE`, `LOCATION`
   - `avatarUrl` (replace with your photo)
   - Social media links

2. **Projects**: Modify the `PROJECTS` array with your own work

3. **Skills**: Update the `SKILLS` array with your expertise

4. **Experience**: Edit the `EXPERIENCE` array with your work history

### Contact Form

To enable the contact form:

1. **Formspree** (Recommended):
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form
   - Update `FORM_ACTION` in `app/page.tsx` with your form endpoint

2. **EmailJS**:
   - Sign up at [emailjs.com](https://emailjs.com)
   - Configure your email service
   - Update the form action accordingly

## 📁 Project Structure

```
rabindra-portfolio/
├── app/
│   ├── page.tsx          # Main portfolio component
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── favicon.ico       # Site icon
├── .github/
│   └── workflows/        # GitHub Actions deployment
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Custom Domain

To use a custom domain:

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Configure your DNS settings to point to GitHub Pages
3. Add a `CNAME` file in the `public` folder with your domain

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by Brittany Chiang and Adham Dannaway
- Built with Next.js and Tailwind CSS
- Icons from Heroicons

---

**Built with ❤️ by Rabindra Prasad Sah**
