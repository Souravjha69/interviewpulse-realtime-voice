# InterviewPulse 🎙️🤖
*A real-time AI voice interview practice platform*

InterviewPulse is a full-stack application that simulates realistic interview conversations using AI voice technology. It helps candidates practice interviews in a natural, spoken format and receive structured feedback to improve communication, confidence, and technical clarity.

---

## 🚀 Key Features
- Real-time AI-driven voice interviews  
- Dynamic question flow based on role and difficulty  
- Live transcription and session timeline  
- Post-interview performance feedback  
- Session history and progress tracking  

---

## 🧠 Motivation
Traditional mock interviews often feel scripted and limited. InterviewPulse was built to provide a more natural, conversational interview experience that mirrors real hiring scenarios and delivers actionable insights for improvement.

---

## 🛠️ Tech Stack
**Frontend**
- <Next.js / React>
- <Tailwind CSS>

**Backend**
- <Node.js / Express / Serverless>

**AI & Voice**
- <OpenAI / LLM Provider>
- <Voice API (Vapi / WebRTC / WebSockets)>

**Database**
- <PostgreSQL / MongoDB / Supabase>

**Authentication**
- <NextAuth / Clerk / Custom Auth>

---

## 📂 Project Structure
interviewpulse/
├── src/                # Application source code
├── server/             # Backend / API logic
├── public/             # Static assets
├── docs/               # Architecture & documentation
├── .github/            # CI/CD & issue templates
├── .env.example        # Environment variable template
├── README.md
└── package.json


---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- npm / yarn / pnpm
- API keys for AI & voice services

### Installation
```bash
git clone https://github.com/<your-username>/interviewpulse.git
cd interviewpulse
npm install

🧩 System Architecture (High Level)
	1.	User initiates an interview session
	2.	Voice stream connects to AI interviewer in real time
	3.	Conversation is transcribed and stored
	4.	AI generates structured feedback after session ends
	5.	User can review reports and track progress

Detailed flow diagrams are available in docs/.
