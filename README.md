# Se-University


**Se-University** is a modern, multilingual online education platform designed to empower learners worldwide with high-quality, accessible, and engaging diploma programs. Built with Next.js, React, and Tailwind CSS, it offers expertly crafted diplomas in fields like Full Stack Web Development, Data Science, UI/UX Design, and more. The platform features a seamless enrollment process, multi-step forms, payment integration, and a fully responsive, accessible UI.

## 🌍 Mission & Vision

- **Mission:** Democratize quality education by making it accessible, affordable, and engaging for learners worldwide through innovative online learning experiences.
- **Vision:** Become the leading global platform for professional development and academic excellence, fostering a community of lifelong learners.

---

## 🗂️ Project Structure

```
se-university/
│
├── components.json                # UI library and alias configuration
├── messages/                      # Localization files (English & Arabic)
│   ├── en/                        # English translations
│   └── ar/                        # Arabic translations
├── next.config.mjs                # Next.js configuration
├── package.json                   # Project metadata and dependencies
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── README.md                      # Project documentation (this file)
│
└── src/
    ├── app/
    │   ├── (dummyData)/           # Mock data for courses/diplomas
    │   ├── [locale]/              # Localized routes (en, ar)
    │   │   ├── diploma/[id]/      # Diploma details and enrollment
    │   │   ├── enrollment-status/ # Enrollment status page
    │   │   ├── purchase/          # Purchase/payment flow
    │   │   ├── signin/            # Sign-in page
    │   │   ├── layout.tsx         # Main layout with i18n and header
    │   │   └── page.tsx           # Home page (hero, about, diplomas)
    │   ├── api/                   # (Reserved for API routes)
    │   ├── assets/                # Images and SVGs (logo, hero, etc.)
    │   ├── fonts/                 # Custom font files
    │   ├── store/                 # (Reserved for Redux or state management)
    │   └── styles/                # Global CSS (Tailwind)
    ├── components/                # Reusable React components
    │   ├── ui/                    # UI primitives (button, card, dialog, etc.)
    │   ├── about-section.tsx      # About section (mission, vision, values)
    │   ├── diplomas-section.tsx   # Diplomas/courses listing
    │   ├── Header.tsx             # Main navigation/header
    │   ├── Footer.tsx             # Footer with contact info
    │   └── ...                    # Other feature components
    ├── documentation/             # (Reserved for docs)
    ├── i18n.ts                    # Internationalization setup
    ├── lib/                       # Utility functions
    ├── middleware.ts              # Next.js middleware (i18n routing)
    └── navigations.ts             # Shared navigation helpers
```

---

## ✨ Key Features

- **Multilingual Support:** English and Arabic, with easy locale switching.
- **Diploma Programs:** Browse, view details, and enroll in a variety of diplomas.
- **Modern UI:** Built with Tailwind CSS and shadcn/ui components for accessibility and responsiveness.
- **Step-by-Step Enrollment:** Multi-step forms for personal info, OTP verification, and payment.
- **Mock Data:** Easily extensible course/diploma data for rapid prototyping.
- **Global State Ready:** Structure in place for Redux or other state management.
- **Internationalization:** Powered by `next-intl` for scalable i18n.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 📁 Notable Directories

- `src/app/[locale]/` – All main pages, localized by language.
- `src/components/` – Modular, reusable UI and feature components.
- `messages/` – JSON translation files for all supported languages.
- `src/app/(dummyData)/courseData.ts` – Example diploma/course data.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Tailwind CSS, shadcn/ui, Framer Motion
- **i18n:** next-intl
- **State Management:** Redux Toolkit (structure ready)
- **Icons:** Lucide
- **Other:** PostCSS, TypeScript

---

## 📣 Contributing

Feel free to fork, open issues, or submit pull requests to help improve Se-University!

---

## 📜 License

This project is for educational/demo purposes.

---
