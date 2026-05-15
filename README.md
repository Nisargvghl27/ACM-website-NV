# 🌐 ACM SVNIT Official Website

The official web platform for the ACM Student Chapter at the National Institute of Technology, Surat (SVNIT). This repository houses a modern, high-performance web application designed to showcase the chapter's events, team members, and overall legacy.

## ✨ Features

* **Dynamic Events Management:** Browse past and upcoming technical events, hackathons, and sessions fetched in real-time from Firebase Firestore.
* **Admin Dashboard:** A secured `/admin` portal authenticated via Firebase Auth allowing the core team to add, manage, and delete events dynamically.
* **Fully Functional Contact Form:** A `/contact` page that stores inquiries in the database and sends automated, professional email confirmations to both the user and the ACM team via Nodemailer.
* **Dark/Light Mode:** Seamless theme switching with system-preference detection using `next-themes`.
* **Cinematic Animations:** Smooth page transitions, scroll reveals, and micro-interactions powered by Framer Motion.
* **Responsive Design:** A fully mobile-friendly architecture built with Tailwind CSS.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Database & Auth:** Firebase (Firestore & Firebase Authentication)
* **Icons:** Lucide React
* **Mailing:** Nodemailer

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router pages
│   ├── about/            # About the chapter
│   ├── admin/            # Secure admin dashboard for event management
│   ├── api/contact/      # API route for sending emails via Nodemailer
│   ├── contact/          # Contact us page with form
│   ├── events/           # Events listing and dynamic [id] routing
│   ├── team/             # Core team showcase
│   ├── globals.css       # Global Tailwind and theme configurations
│   ├── layout.tsx        # Root layout with Navbar, Footer, and ThemeProvider
│   ├── loading.tsx       # Custom animated splash screen
│   ├── not-found.tsx     # Custom 404 page
│   └── page.tsx          # Landing page
├── components/           # Reusable UI components
│   ├── Footer.tsx        # Global footer
│   ├── Navbar.tsx        # Responsive navigation bar
│   ├── PageHeader.tsx    # Standardized header for subpages
│   ├── ThemeProvider.tsx # Wrapper for next-themes
│   └── ThemeToggle.tsx   # Dark/Light mode toggle button
└── lib/                  # Configurations and utilities
    ├── firebase.ts       # Firebase initialization and exports
    └── firestore.ts      # Helper functions for database operations

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
* Node.js (v18 or higher)
* npm, yarn, or pnpm
* A Firebase Project (with Firestore and Authentication enabled)
* A Gmail account for Nodemailer (with an App Password generated)

### 1. Clone the repository
```bash
git clone [https://github.com/acm-svnit/website.git](https://github.com/acm-svnit/website.git)
cd website
2. Install dependencies
Bash
npm install
# or
yarn install
3. Set up Environment Variables
Create a .env.local file in the root directory and add the following variables. Replace the placeholder values with your actual Firebase config and Email credentials:

Code snippet
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Nodemailer Configuration (For Contact Form)
EMAIL_USER=your_chapter_email@gmail.com
EMAIL_PASS=your_gmail_app_password
4. Run the Development Server
Bash
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to see the application running.

🔒 Admin Access
To access the Admin panel to manage events:

Navigate to http://localhost:3000/admin.

You must be authenticated via Firebase Auth. Make sure to set up authorized admin emails in your Firebase console.

🤝 Contributing
  
Contributions, issues, and feature requests are welcome! If you are an SVNIT student and want to contribute to the chapter's open-source projects, feel free to fork this repository and submit a Pull Request.