# Fullvine Millers Website

A modern, responsive agricultural company website built with React, TypeScript, and Tailwind CSS. This single-page application showcases sustainable farming practices, crop production, greenhouse operations, and community outreach programs.

## 🌟 Features

### ✨ Modern Design
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Professional UI** - Clean, modern design with consistent branding
- **Interactive Elements** - Engaging user experience with animated components

### 🧭 Navigation
- **Fixed Header** - Always accessible navigation bar
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Menu** - Responsive hamburger menu for mobile devices
- **Active States** - Visual feedback for current section

### 📱 Responsive Sections
- **Hero Section** - Eye-catching banner with call-to-action buttons
- **About Section** - Company overview with feature highlights
- **Crop Production** - Detailed showcase of agricultural products
- **Greenhouse Operations** - Technology and infrastructure highlights
- **Community Programs** - Outgrower programs and partnership details
- **Statistics** - Key performance metrics and achievements
- **Contact Section** - Interactive contact form and business information

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **Build Tool**: Vite (recommended)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fullvien-website.git
   cd greenharvest-agriculture
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be available in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── CropProduction.tsx
│   ├── GreenhouseOperations.tsx
│   ├── CommunitySection.tsx
│   ├── StatsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design Features

### Color Palette
- **Primary Green**: `#16a34a` (green-600)
- **Dark Green**: `#15803d` (green-700)
- **Light Green**: `#22c55e` (green-500)
- **Background**: `#f9fafb` (gray-50)
- **Text**: `#374151` (gray-700)

### Typography
- **Headings**: Bold, modern sans-serif
- **Body Text**: Clean, readable font with proper line height
- **Responsive Sizes**: Adaptive typography across devices

### Interactive Elements
- **Hover Effects**: Subtle scale transforms and shadow changes
- **Transitions**: Smooth 300ms transitions for all interactions
- **Focus States**: Accessible focus indicators for keyboard navigation

## 🌱 Key Sections Explained

### Hero Section
- Compelling headline and subtext
- Call-to-action buttons with smooth scrolling
- Gradient background with overlay effects

### About Section
- Three key features with icons
- Card-based layout with hover animations
- Responsive grid system

### Crop Production
- Visual crop showcase with emojis
- Feature lists with checkmark icons
- Interactive product cards

### Greenhouse Operations
- Technology highlights
- Visual greenhouse product display
- Two-column responsive layout

### Community Programs
- Outgrower program details
- Statistics and achievements
- Call-to-action for partnerships

### Contact Section
- Interactive contact form
- Business hours and contact information
- Form validation and submission handling

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

### Mobile Features
- Hamburger menu navigation
- Touch-friendly buttons and links
- Optimized text sizes and spacing
- Stacked layouts for better mobile viewing

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Visual focus states for interactive elements
- **Alt Text**: Descriptive text for images and icons
- **Color Contrast**: WCAG compliant color combinations

## 🔧 Customization

### Updating Content
Edit the component files to update:
- Company information
- Product details
- Contact information
- Statistics and metrics

### Styling Changes
Modify Tailwind classes in components or extend the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-green': '#your-color',
      }
    }
  }
}
```

### Adding New Sections
1. Create a new component in the components directory
2. Import and add it to the main App component
3. Update navigation if needed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon library
- **Agriculture Industry** for inspiration and content structure

## 📞 Support

If you have any questions or need help with the project, please:
- Open an issue on GitHub
- Contact us at: support@greenharvest.com
- Visit our website: [www.greenharvest.com](https://www.greenharvest.com)

---

**GreenHarvest Agriculture** - *Cultivating Excellence in Agriculture* 🌱