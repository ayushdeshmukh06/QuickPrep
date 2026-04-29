<div align="center">
  <table border="0" style="border-collapse: collapse; border: none;">
    <tr style="border: none;">
      <td width="60%" style="border: none; text-align: left; vertical-align: middle; padding-right: 20px;">
        <img src="https://raw.githubusercontent.com/ayushdeshmukh06/quickprep/main/public/logo.svg" width="60px" alt="QuickPrep Logo" />
        <h1 style="border: none; margin-top: 10px;">Get Interview-Ready with AI-Powered Practice & Feedback</h1>
        <p style="font-size: 1.15em; color: #666; line-height: 1.5;">
          Master your technical interview skills with real-time voice AI. QuickPrep simulates realistic interview environments and provides detailed, actionable analytics to help you land your dream job.
        </p>
        <br />
        <div style="display: flex; gap: 10px;">
          <a href="https://quick-prep-fimx.vercel.app">
            <img src="https://img.shields.io/badge/Live_Demo-0070f3?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
          </a>
          <a href="https://github.com/ayushdeshmukh06/quickprep#🏁-getting-started">
            <img src="https://img.shields.io/badge/Documentation-333?style=for-the-badge&logo=gitbook&logoColor=white" alt="Docs">
          </a>
        </div>
      </td>
      <td width="40%" style="border: none; text-align: center; vertical-align: middle;">
        <img src="https://raw.githubusercontent.com/ayushdeshmukh06/quickprep/main/public/robot.png" alt="QuickPrep Hero" width="100%" style="max-width: 380px;">
      </td>
    </tr>
  </table>
</div>

<br />

## 🌟 Overview

**QuickPrep** is a professional mock interview platform that bridges the gap between study and performance. Unlike traditional text-based platforms, QuickPrep utilizes **Voice AI** to simulate the pressure and flow of a real technical interview.

---

## 🛠️ Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind,firebase,openai,vercel" />
</div>

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Backend**: [Firebase](https://firebase.google.com/) (Firestore, Admin SDK)
- **AI/Voice**: [Vapi.ai](https://vapi.ai/) (Voice SDK), [OpenRouter](https://openrouter.ai/) (GPT-4o)
- **Architecture**: Server Actions, Zod Validation, Middleware Authentication

---

## 🏁 Getting Started

### 1. Prerequisites
- **Node.js** v18+
- **Firebase** account (Firestore enabled)
- **Vapi.ai** account for voice capabilities
- **OpenRouter** API key for AI evaluations

--- 


### 2. Installation
  * Clone the repository:
    
    ```bash
      git clone [https://github.com/ayushdeshmukh06/quickprep.git]
      cd quickprep
    ```
  * Install dependencies:

    ```bash
      npm install
    ```
  * Set up Environment Variables:
    
    Create a ```.env.local``` file in the root directory and add the following:

    ```bash
      # Firebase Client
      NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
      NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
      
      # Firebase Admin (Server Side)
      FIREBASE_PROJECT_ID=your_project_id
      FIREBASE_CLIENT_EMAIL=your_client_email
      FIREBASE_PRIVATE_KEY="your_private_key"
      
      # Vapi.ai
      NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
      
      # AI Evaluation (OpenRouter)
      OPENROUTER_API_KEY=your_openrouter_api_key
    ```

  * Run the development server:
    
    ```bash
      npm run dev
    ```
    Open http://localhost:3000 to view the application.

---


## 📁 Project Structure

```text
├── app/                  # Next.js App Router
│   ├── (auth)/           # Authentication (Sign-in/Sign-up)
│   ├── (root)/           # Dashboard & Interview routes
│   ├── api/              # Vapi & Feedback API endpoints
│   └── globals.css       # Global styles
├── components/           # UI components (Shadcn, Agent, etc.)
├── constants/            # Static data & configurations
├── firebase/             # SDK initialization (Admin & Client)
├── lib/                  # Server Actions & Utility functions
├── public/               # Static assets (images, icons)
├── types/                # TypeScript definitions
└── package.json          # Dependencies & scripts
```

---

📝 Roadmap

  * Video interview support.
  * Integration with LinkedIn for profile-based tailoring.
  * Coding challenge integration within the voice session.
  * Peer-review mode for community interviews.
  


