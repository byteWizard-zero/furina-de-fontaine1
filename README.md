# 🎭 Furina's Court: Interactive AI Experience

[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://furina-de-fontaine1.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Groq](https://img.shields.io/badge/Groq-Llama3--Powered-orange?style=for-the-badge&logo=lightning)](https://groq.com/)

> "The curtain rises, the lights dim, and the stage is set. Seek your audience with the Hydro Archon—if you dare."

**Furina's Court** is a high-performance, theatrical AI chat application built to bring the drama of Fontaine to the web. Featuring a custom-tuned personality, fluid animations, and atmospheric audio, this project showcases the intersection of generative AI and modern web development.

---

## ✨ Features

* **🎭 Theatrical AI Persona:** Powered by **Llama-3 via Groq**, tuned for a flamboyant, concise, and dramatic Furina de Fontaine personality.
* **🔊 Immersive Audio:** Integrated Fontaine-themed background music with a custom-built React toggle.
* **⚖️ Framer Motion Animations:** Smooth "Request Audience" transitions and UI reveals that mimic the grandeur of an opera house.
* **🌊 Responsive UI:** Built with **Tailwind CSS** for a deep-sea, Fontaine-inspired aesthetic.
* **📈 Performance:** Optimized with **Vercel Analytics** for real-time monitoring and speed.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 14 (App Router)
* **AI Engine:** Groq SDK (Llama 3.3 70B)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+)
* A Groq API Key. You can get one from the [Groq Console](https://console.groq.com/).

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/byteWizard-zero/furina-de-fontaine1.git
   cd furina-de-fontaine1
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your API key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   ```
