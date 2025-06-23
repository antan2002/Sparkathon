CartIQ – Smart Shopping Assistant

CartIQ is an intelligent shopping assistant that helps users make healthier, cost-effective, and personalized grocery decisions. It combines modern web development with AI-powered services for nutrition scoring, price optimization, and smart product recommendations.

---

## 📦 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js (Express)
- **Database**: MongoDB (with Mongoose)
- **AI Microservice**: FastAPI (Python)
- **Authentication**: JWT (JSON Web Token)

---

## 🔥 Features

- ✅ User Registration & Login (with JWT)
- ✅ Role-based access (`user`, `admin`)
- ✅ Nutrition Scoring via AI (FastAPI)
- ✅ Smart Pricing Optimizer
- ✅ AI-based Product Recommendations
- ✅ Admin Panel: Add/Update Products, Nutrition Data, Inventory
- ✅ MongoDB Integration for saving user activity, scores, and insights

---

## 🚀 Getting Started

1. Clone the Repository
git clone https://github.com/your-username/cartiq.git
cd cartiq

2. Install Node.js Backend

cd backend
npm install

3. Setup Environment Variables
Create .env inside /backend:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Start the Node Server
npm start

5. Setup & Run FastAPI AI Service
Ensure Python & FastAPI are installed:
pip install fastapi uvicorn
Run the AI service:
uvicorn main:app --reload
