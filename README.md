# Tamil Poem Poster Creator

🎨 A beautiful, modern web application for creating stunning HD posters from Tamil poetry. Perfect for Instagram posts and social media sharing.

## ✨ Features

- **Multi-language Support**: Full Tamil script support with beautiful fonts
- **Customizable Design**: 
  - 40+ color swatches for backgrounds
  - 16 gradient presets
  - Custom image upload support
  - Tamil font selection (Noto Sans Tamil, Catamaran, Latha, etc.)
- **Smart Positioning**: 9 different text position options
- **Live Preview**: Real-time preview of your poster design
- **HD Download**: Generate high-quality 1080×1080 PNG images
- **Component Architecture**: Modular, reusable components

## 🚀 Getting Started

### Prerequisites
- Node.js (18+)
- npm, yarn, or pnpm

### Installation

1. **Clone and install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Enhanced global styles with Tamil font support
│   ├── layout.tsx           # App layout
│   └── page.tsx             # Main entry point
├── components/
│   ├── TamilPosterCreator.tsx   # Main component orchestrator
│   └── poster/                  # Modular poster components
│       ├── BackgroundControls.tsx
│       ├── ColorPicker.tsx
│       ├── ContentInputs.tsx
│       ├── DownloadButton.tsx
│       ├── FontControls.tsx
│       ├── GradientPresets.tsx
│       ├── PosterCanvas.tsx
│       └── TextPositioning.tsx
└── types/
    └── poster.ts            # TypeScript type definitions
```

## 🎯 Component Architecture

### Core Components

1. **`TamilPosterCreator`** - Main orchestrator component
2. **`ContentInputs`** - Handles poem text, author, website, Instagram inputs
3. **`FontControls`** - Font family, size, color, alignment controls
4. **`BackgroundControls`** - Solid colors, gradients, image uploads
5. **`TextPositioning`** - 9-position grid for text placement
6. **`PosterCanvas`** - Live preview with real-time updates
7. **`DownloadButton`** - HD poster generation and download
8. **`ColorPicker`** - Enhanced color picker with 40+ swatches
9. **`GradientPresets`** - 16 beautiful gradient options

### Data Flow

```
TamilPosterCreator (State Management)
├── ContentInputs → Updates content state
├── FontControls → Updates font settings
├── BackgroundControls → Updates background
├── TextPositioning → Updates position
├── PosterCanvas → Renders live preview
└── DownloadButton → Generates HD image
```

## 🎨 Customization Options

### Background Types
- **Solid Colors**: 40+ predefined colors + custom color picker
- **Gradients**: 16 beautiful presets (Sunrise, Ocean, Lavender, etc.)
- **Images**: Upload custom background images

### Typography
- **Fonts**: Tamil-optimized fonts (Noto Sans Tamil, Catamaran, Latha, etc.)
- **Sizes**: 20px - 100px range
- **Colors**: Full color picker with common swatches
- **Alignment**: Left, Center, Right
- **Line Height**: 1.0 - 3.0 range

### Positioning
9-grid positioning system:
- Top: Left, Center, Right
- Center: Left, Center, Right  
- Bottom: Left, Center, Right

## 🛠️ Technical Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Tamil support)
- **Image Generation**: HTML5 Canvas API

## 🎯 Default Configuration

The app comes pre-configured with:
- **Author**: அஜித்குமார் (Ajithkumar)
- **Website**: www.ajithkumarr.com
- **Instagram**: @vaanawill
- **Sample Poem**: Beautiful Tamil verse about love and poetry

## 📱 Instagram Ready

- **Perfect Dimensions**: 1080×1080 pixels
- **High Quality**: PNG format for crisp text
- **Tamil Support**: Full Unicode Tamil script support
- **Social Media Optimized**: Designed for mobile viewing

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The app is a standard Next.js application and can be deployed to:
- Netlify
- Vercel
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure components follow the modular architecture
5. Test with different Tamil poems and configurations
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Tamil typography support by Google Fonts
- Beautiful gradient inspirations from various design systems
- Tamil poetry community for inspiration

---

**Made with ❤️ for Tamil poetry lovers**