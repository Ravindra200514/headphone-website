# Sony WH-1000XM6 Scrollytelling Experience

A hyper-premium, Awwwards-level interactive landing page built for the Sony WH-1000XM6 headphones. This project features a 240-frame hardware-accelerated scrollytelling animation, independent feature pages ("Technology", "Noise Cancelling", "Specs"), an Apple-style glassmorphism navigation bar, and an ultra-realistic simulated checkout gateway.

## Built With
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Rendering**: HTML5 `<canvas>` via `requestAnimationFrame`
- **Typography**: Inter / SF Pro-inspired corporate minimal aesthetic.

## Features
- **Cinematic Scrollytelling**: Scroll down the homepage to literally dismantle the headphones into a technical diagram and reassemble them.
- **Scroll-Aware Route active states**: The glassmorphism Navbar watches your position inside the app dynamically.
- **Full Checkout Flow**: Realistic mock "Apple Pay" e-commerce checkout page.
- **Micro-Animations**: Every button, link, and transition is mathematically sprung with proper ease-in-outs.

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Ravindra200514/headphone-website.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Architecture

- `src/components/CanvasSequence.tsx`: Core engine preloading 240 JPG frames and syncing to ScrollY natively.
- `src/components/ScrollytellingSections.tsx`: The 5 storytelling textual beats mapping onto the exact canvas timeline.
- `src/components/Navbar.tsx`: Animated layout module for switching between deep-dive pages.
