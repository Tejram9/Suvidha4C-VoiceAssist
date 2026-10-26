# Suvidha4C Voice Assist (सुविधा 4C व्हॉइस असिस्ट)

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.x-purple.svg)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-teal.svg)](https://tailwindcss.com)
[![Web Speech API](https://img.shields.io/badge/Web_Speech_API-Voice_Assisted-emerald.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

> **Civic Technology Accessibility Prototype:** An accessible, trilingual web application designed to help Indian citizens discover government services, verify statutory document checklists, listen to requirements via voice readout, locate sample Common Service Centers (CSC) / Aaple Sarkar Seva Kendras, and track demonstration assistance tokens.

---

## 🏛️ Civic Concept & Features

Suvidha4C Voice Assist is structured around four civic pillars: **Citizen, Convenience, Clarity, Community (4C)**.

### 1. 🇮🇳 Trustworthy Civic Technology Interface
- Clean, dignified white background with deep civic green accents (`#065f46`, `#047857`) and subtle borders.
- National tricolor subtle header band and accessibility indicator badges.
- Fully responsive across desktop, tablet, and mobile screens.
- Zero placeholder buttons—every button opens an action modal, filter, speech readout, or status transition.

### 2. 🌐 Real Working Trilingual Language Selector
- Live selector for **English, Hindi (हिंदी), and Marathi (मराठी)**.
- Full UI translations covering navigation, headings, search placeholders, category names, service details, document checklists, provider tags, tracking statuses, and legal disclaimers.
- Language preference is automatically preserved in `localStorage` across page reloads.
- Dynamically configures the Web Speech engine (`en-IN`, `hi-IN`, `mr-IN`) for recognition and audio readout.

### 3. 🔍 Searchable Citizen Services Directory
- Comprehensive demonstration dataset for essential certificates and welfare schemes:
  - **Income Certificate** (उत्पन्न दाखला / आय प्रमाण पत्र - 1 Year / 3 Years)
  - **Caste Certificate** (जातीचा दाखला / जाति प्रमाण पत्र - SC/ST/OBC/VJNT/SBC)
  - **Domicile & Nationality Certificate** (अधिवास व राष्ट्रीयत्व प्रमाणपत्र)
  - **Non-Creamy Layer Certificate** (नॉन क्रिमीलेअर प्रमाणपत्र - NCL)
  - **Post-Matric Scholarship** (मॅट्रिकोत्तर शिष्यवृत्ती - MahaDBT & NSP)
  - **Ration Card Services** (रेशन कार्ड सुधारणा / नाव समाविष्ट करणे)
  - **PM-Kisan Samman Nidhi & Farmer Support** (पीएम किसान सन्मान निधी व ई-केवायसी)
  - **Senior Citizen Identity Card & Pension** (ज्येष्ठ नागरिक ओळखपत्र व पेन्शन)
- Filtering by Department and Service Category.
- Fast keyword search across titles and multilingual aliases (e.g. searching *"जातीचा दाखला"* or *"income certificate"*).

### 4. 📋 Interactive Document Checklist & Voice Readout
- **Interactive Checkboxes:** Citizens can check off documents they have already gathered, displaying a live progress indicator (e.g., *"3 of 5 documents ready"*).
- **Text-to-Speech (Voice Readout):** Citizens can press the **"Listen to Requirements"** button to hear the document requirements read aloud in their selected language using the browser's `SpeechSynthesis` API.
- **Application Method Walkthrough:** Clear comparison between online self-filing on government portals vs assisted submission at a local Kendra.
- **Official Portal Links:** Direct external links to official portals (Aaple Sarkar MahaOnline, National Portal of India, ServicePlus, DigiLocker, PM Kisan, MahaDBT).

### 5. 🎙️ Browser Web Speech API Voice Search
- Microphone button embedded in the main search bar and header.
- Animated visual listening ring / waveform pulse when microphone is active.
- Real-time speech transcript feedback with instant matching against citizen services.
- Multi-lingual speech recognition matching the selected UI language (`en-IN`, `hi-IN`, `mr-IN`).
- Built-in error handling for permission denied, microphone unavailable, or no speech detected, alongside automatic fallback to manual text search for unsupported browsers.

### 6. 🏢 Service Provider Directory (CSC & Aaple Sarkar)
- Realistic demonstration profiles modeled after real-world facilitation kiosks:
  - *Aaple Sarkar Seva Kendra (VLE Center #104, Dadar West, Mumbai)*
  - *Digital Seva Kendra (CSC Facilitation Hub #287, Shivajinagar, Pune)*
  - *Jan Seva Kendra (e-District Facilitation Unit, Hazratganj, Lucknow)*
  - *Suvidha Citizen Kiosk (Thane Municipal Zone 2, Thane East)*
  - *MahaOnline Citizen Facilitator (Sitabuldi Hub, Nagpur)*
  - *Gram Panchayat Sangram Kendra (CSC Rural VLE, Baramati)*
- Filter by District and Center Type.
- Operating hours, supported languages, wheelchair accessibility flags, and biometric Aadhaar eKYC device availability.
- Prominently labeled with sample disclaimers: *"Sample Demo Center for Testing"*.

### 7. 🎫 Demo Request Submission & Persistent Tracking Dashboard
- Submit an assistance request specifying service, center, applicant name, and preferred time slot.
- Generates a unique tracking token (e.g., `SUVIDHA-2026-84912`).
- Saved in `localStorage` so requests persist after page refreshes.
- Filter by status tags: `Submitted`, `In Progress`, `Verification Pending`, and `Completed`.
- **Interactive Stage Advance Simulator:** Citizens can click **"Advance Status Stage (Demo)"** to simulate the lifecycle progression of an application directly inside the prototype.

---

## 🚀 Installation & Running Locally

### Prerequisites
- **Node.js**: v18 or higher (Node v24 tested)
- **npm**: v9 or higher

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd Suvidha4C-VoiceAssist
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (typically `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Code Quality & Linting
```bash
npm run lint
```
Runs Oxlint with zero errors and zero warnings.

---

## 🧪 Testing the Prototype Features

1. **Test Language Switching:**
   - Click the language selector at the top right of the navigation bar.
   - Switch between **English**, **हिंदी**, and **मराठी**.
   - Notice how all cards, headers, search prompts, and checklists switch languages instantly.
   - Refresh the page to confirm that your selected language is retained from `localStorage`.

2. **Test Voice Search (Web Speech API):**
   - Click the **"Search by Voice"** button in the search bar or header.
   - If prompted by your browser, allow microphone access.
   - Speak a service name (e.g. *"Income Certificate"* in English, or *"जातीचा दाखला"* in Marathi, or *"आय प्रमाण पत्र"* in Hindi).
   - Observe the live transcript box and the instant matching card that appears.
   - Click **"View Checklist & Steps"** on the matched card to open the service directly.

3. **Test Interactive Document Checklist & Audio Readout:**
   - Click **"View Checklist & Steps"** on the Income Certificate card.
   - Click on document rows to mark them as ready and watch the progress counter update.
   - Click the **"Listen to Requirements"** button to hear the checklist read aloud through the browser speech synthesizer.
   - Click **"Print / Save Checklist"** to test print formatting.

4. **Test Booking & Status Advance Simulation:**
   - Click **"Request Demo Center Assistance"** from any service or provider card.
   - Select your preferred visit slot and submit the form.
   - Copy the generated token number (e.g., `SUVIDHA-2026-XXXXX`).
   - Click **"View in Tracker Dashboard"**.
   - In the dashboard, locate your request and click **"Advance Status Stage (Demo)"** to see the status cycle through `Submitted` ➔ `In Progress` ➔ `Verification Pending` ➔ `Completed` with timestamped audit notes.
   - Refresh the page to verify that the request and status changes persist in `localStorage`.

---

## 📂 Project Architecture

```
d:/Suvidha4C-VoiceAssist/
├── public/
│   └── favicon.svg                  # Civic emblem icon
├── src/
│   ├── components/
│   │   ├── Header.tsx               # Navigation, tricolor stripe, language selector
│   │   ├── AdvisoryBanner.tsx       # Civic advisory banner & official portal links
│   │   ├── HeroSection.tsx          # Accessible search bar & voice trigger
│   │   ├── VoiceSearchModal.tsx     # Web Speech recognition UI & real-time matching
│   │   ├── CategoryGrid.tsx         # Service category cards with counts
│   │   ├── ServiceDirectory.tsx     # Searchable & filterable services catalog
│   │   ├── ServiceDetailModal.tsx   # Document checklist, speech playback, official portals
│   │   ├── ProviderDirectory.tsx    # Facilitation centers directory with district filters
│   │   ├── DemoRequestModal.tsx     # Demo booking form with localStorage persistence
│   │   ├── TrackingDashboard.tsx    # Request tracker with status lifecycle simulation
│   │   └── Footer.tsx               # Civic accessibility notes & official links
│   ├── data/
│   │   ├── services.ts              # Rich citizen services dataset with checklists & links
│   │   ├── providers.ts             # Realistic sample facilitation centers
│   │   └── translations.ts          # Comprehensive English, Hindi & Marathi dictionaries
│   ├── hooks/
│   │   └── useVoiceRecognition.ts   # Custom hook managing Web Speech API lifecycle
│   ├── utils/
│   │   ├── speech.ts                # Speech recognition & SpeechSynthesis helpers
│   │   └── storage.ts               # LocalStorage demo request manager with sample seeds
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces for services, providers, requests
│   ├── App.tsx                      # Root application component
│   ├── index.css                    # Tailwind CSS v4 directives & civic design tokens
│   └── main.tsx                     # React application entry point
├── index.html                       # HTML5 entry with Google Fonts (Inter + Noto Sans)
├── package.json                     # Project manifest and scripts
├── tsconfig.json                    # TypeScript compiler config
└── vite.config.ts                   # Vite bundler with Tailwind CSS v4 & React plugins
```

---

## ⚖️ Civic Disclaimer & Limitations

- **Educational Prototype:** Suvidha4C Voice Assist is an independent demonstration and educational civic technology prototype designed to test accessibility patterns for citizen service discovery.
- **No Paid APIs or Harvesting:** The application does not collect real Aadhaar, PAN, or banking details. All demo tokens and submitted requests are stored strictly in the user's browser `localStorage`.
- **Official Portals:** Information provided is illustrative. Actual legal certificate issuances, government fees, and statutory rules are governed by the respective State and Central Government authorities through official portals such as [Aaple Sarkar MahaOnline](https://aaplesarkar.mahaonline.gov.in), [ServicePlus](https://serviceonline.gov.in), and [India.gov.in](https://services.india.gov.in).
- **Web Speech API Compatibility:** Voice recognition and text-to-speech features depend on the host browser's implementation of the standard Web Speech API (supported in Google Chrome, Microsoft Edge, and modern Chromium-based browsers). A text search fallback is provided for non-supporting browsers.
