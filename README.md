# ChatVerse 🤖

An AI-powered conversational web application inspired by ChatGPT, built with the MERN stack and integrated with Google Gemini AI.

🔗 **Live Demo:** [chatverse-1-58ew.onrender.com](https://chatverse-1-58ew.onrender.com)

---

## Features

- 🔐 JWT-based User Authentication (Register & Login)
- 💬 AI-powered Chat using Google Gemini API
- 🧵 Multiple Chat Threads — create, switch, and delete conversations
- 💾 Chat History saved in MongoDB Atlas
- ✨ Typing animation effect for AI responses
- 📝 Markdown rendering with syntax-highlighted code blocks
- 📱 Responsive UI with sidebar navigation

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Redux Toolkit, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| AI Integration | Google Gemini API |
| Authentication | JWT (JSON Web Token), Bcrypt |
| Styling | CSS3 |
| Deployment | Render |

---

## Project Structure

```
ChatVerse/
├── backend/
│   ├── models/
│   │   └── Thread.js         # Chat thread & message schema
│   ├── routes/
│   │   └── chat.js           # Chat API routes
│   ├── utils/
│   │   └── geminiai.js       # Gemini AI integration
│   ├── .env                  # Environment variables
│   └── server.js             # Express server entry point
│
└── frontend/
    └── src/
        ├── App.jsx            # Root component with Context
        ├── MyContext.jsx      # Global state management
        ├── Sidebar.jsx        # Thread list & navigation
        ├── Chatwindow.jsx     # Main chat interface
        └── Chat.jsx           # Message display with markdown
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat` | Send message & get AI reply |
| GET | `/api/chat/threads` | Get all chat threads |
| GET | `/api/chat/threads/:threadId` | Get messages of a thread |
| DELETE | `/api/chat/threads/:threadId` | Delete a thread |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ChatVerse.git
cd ChatVerse
```

2. **Backend setup**
```bash
cd backend
npm install
```

3. **Create `.env` file in backend folder**
```env
MONGODB_URI=your_mongodb_atlas_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=8080
```

4. **Start backend server**
```bash
npm run dev
```

5. **Frontend setup**
```bash
cd ../frontend
npm install
npm run dev
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `GEMINI_API_KEY` | Google Gemini API key |
| `PORT` | Backend server port (default: 8080) |

---

## Deployment

This project is deployed on **Render**:
- Backend: Node.js Web Service
- Frontend: Static Site

---

## Author

**Vaishnavi Mahajan**

