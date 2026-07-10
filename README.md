# System Design Learning Platform

![System Design Banner](https://img.shields.io/badge/System%20Design-Mastery-blue?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A high-performance, fully-interactive learning platform that auto-ingests the internet's most famous System Design repository ([donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)) and transforms it into a gorgeous, highly-readable interactive course.

## 🌟 Features

- **Automated Data Ingestion:** Includes a custom Node.js parser (`ingest_v3.js`) that downloads the massive System Design Primer Markdown file, intelligently parses the headers into structured hierarchical JSON, and rewrites broken relative links to absolute GitHub URLs.
- **Interactive Exams:** Every module comes with a handcrafted, interactive multiple-choice Final Exam to test your knowledge on Databases, Caching, Load Balancing, and more.
- **Persistent State:** Your Exam scores and active module progress are automatically synced to your browser's `localStorage`. You never lose your progress, even if you refresh!
- **High-Performance Architecture:** Despite the massive 140KB content payload, the platform utilizes Vite **Code-Splitting**, dynamic imports, and `React.lazy` to keep the initial load time blazing fast (eliminating the 500kB bundle size limit).
- **Stunning Aesthetics:** A completely custom, stark-monochrome, high-contrast dark mode UI featuring massive "fat text" typography, `lucide-react` SVG icons, and `rehype-raw` integrated Markdown rendering to ensure complex architecture diagrams are displayed flawlessly.
- **Authentication Ready:** Integrated with Firebase Authentication (Includes a "Continue as Guest" bypass for seamless local/production testing).

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anshullakra007/system-design-learning-platform.git
   cd system-design-learning-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Re-ingest the Primer Content:
   If you want to pull the absolute latest version of the `system-design-primer` from GitHub, run the ingestion script:
   ```bash
   node ingest_v3.js
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack
- **Frontend:** React, Vite
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid)
- **Content Parsing:** Node.js, Markdown AST (`react-markdown`, `rehype-raw`)
- **Icons:** `lucide-react`
- **Data Persistence:** LocalStorage, Firebase (Optional Auth)

## 🤝 Contributing
Feel free to open an issue or submit a pull request if you'd like to add more real-world exam questions or enhance the UI!

## 📜 Acknowledgements
All system design content and architecture diagrams are sourced from the incredible [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer).
