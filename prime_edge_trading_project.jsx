/* =========================================================
PRIME-EDGE TRADING – ELITE GLOBAL ACADEMY DESIGN (UPGRADED)

✅ All project code stays inside ONE GitHub-uploadable folder
✅ Premium international trading academy UI
✅ Finance-grade dashboard layout
✅ Animation + professional branding

Folder Structure (GitHub Ready):

prime-edge-trading/
│
├── frontend/
│   ├── public/
│   │   └── images/
│   │       └── logo.png
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Admin.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Payment.js
│   │   └── Signal.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md

=========================================================

🚀 PREMIUM ELITE FRONTEND DESIGN

Install TailwindCSS first inside frontend:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure tailwind.config.js:

module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme:{ extend:{} },
  plugins:[]
}

---------------------------------------------------------

⭐ UPGRADED HOME PAGE DESIGN

// frontend/src/pages/Home.jsx

import { motion } from "framer-motion";

export default function Home(){
  return(
    <div className="min-h-screen bg-gradient-to-br from-[#020617] to-[#0b1a3a] text-white flex flex-col items-center justify-center p-8 space-y-8">

      <motion.img
        src="/images/logo.png"
        initial={{scale:0.8,opacity:0}}
        animate={{scale:1,opacity:1}}
        className="w-40 rounded-2xl shadow-xl"
      />

      <motion.h1
        initial={{y:40,opacity:0}}
        animate={{y:0,opacity:1}}
        className="text-6xl font-bold text-blue-400 text-center"
      >
        PRIME-EDGE TRADING
      </motion.h1>

      <p className="text-gray-300 max-w-2xl text-center text-lg">
        Elite Global Forex Academy | Professional Swing Trading Signals | Institutional Style Learning Platform
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        <a href="/login" className="px-8 py-4 bg-blue-600 rounded-2xl hover:bg-blue-700 transition">
          Student Login
        </a>
      </div>
    </div>
  )
}

---------------------------------------------------------

⭐ UPGRADED DASHBOARD DESIGN

// frontend/src/pages/Dashboard.jsx

export default function Dashboard(){
  return(
    <div className="min-h-screen bg-gradient-to-br from-[#020617] to-[#0b1a3a] text-white p-10 space-y-8">

      <h1 className="text-4xl font-bold text-blue-400">Student Control Center</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-[#121826] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
          Account Balance
        </div>

        <div className="bg-[#121826] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
          Subscription Status
        </div>

        <div className="bg-[#121826] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
          Trading Signals Feed
        </div>

        <div className="bg-[#121826] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition">
          Live Chat Support
        </div>

      </div>
    </div>
  )
}

---------------------------------------------------------

⭐ BACKEND SERVER (Elite Structure)

// backend/server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.listen(5000,()=>console.log("Prime-Edge Backend Running"));

---------------------------------------------------------

⭐ IMPORTANT SECURITY PRACTICE

Create .env file (DO NOT upload to GitHub):

MONGO_URL=your_database_link
JWT_SECRET=random_secret_key

---------------------------------------------------------

⭐ HOW TO UPLOAD TO GITHUB

Inside project root:

git init
git add .
git commit -m "Prime Edge Trading Academy"
git branch -M main
git remote add origin YOUR_GITHUB_REPO

git push -u origin main

=========================================================

🔥 Your Prime-Edge Trading Academy is now upgraded to elite global design level.

If you want the website to look like a **real international forex institution platform (very powerful business version)**, say:

👉 "Make Prime-Edge ultra elite institutional version"
