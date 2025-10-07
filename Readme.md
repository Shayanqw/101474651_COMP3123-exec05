# 🧩 COMP3123 - Exercise 05  
**Student Name:** Shayan Pourahmad  
**Student ID:** 101474651  
**Course:** Full Stack JavaScript Development  
**Instructor:** Pritesh Patel  
**Date:** October 2025  

---

## 📘 Project Overview
This project demonstrates a simple **Node.js + Express.js** application integrated with **MongoDB Atlas** for COMP3123 (Fullstack JavaScript).  
It includes multiple RESTful routes (`/home`, `/profile`, `/login`, `/logout`) and showcases how to:
- Serve static HTML content
- Use Express routing and middleware
- Parse and validate JSON body parameters
- Read user data from a JSON file
- Connect to **MongoDB Atlas** using Mongoose
- Handle errors gracefully with Express middleware

---

## 📁 Folder Structure
```
101474651_COMP3123-exec05/
│
├── routes/
│   └── users.js                # Contains user-related routes
│
├── screenshots/                # Screenshots of MongoDB Atlas & Postman tests
│
├── .env                        # Environment variables (not committed)
├── .env.example                # Template for environment variables
├── index.js                    # Main server file
├── package.json                # Project configuration
├── README.md                   # Documentation (this file)
└── user.json                   # Sample user data for login validation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/101474651_COMP3123-exec05.git
cd 101474651_COMP3123-exec05
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` File
Add your MongoDB Atlas URI inside a `.env` file:
```env
PORT=8081
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority
```

You can use the provided `.env.example` as a template.

### 4️⃣ Start the Server
```bash
node index.js
```

The console should show:
```
✅ Connected to MongoDB Atlas
Web Server is listening at port 8081
```

---

## 🚀 API Endpoints

### **1️⃣ GET /home**
**Description:** Returns a welcome HTML page.  
**Response:**  
```html
<h1>Welcome to ExpressJs Tutorial</h1>
```

---

### **2️⃣ GET /api/v1/user/profile**
**Description:** Returns user details from `user.json`.  
**Response Example:**
```json
{
  "id": 1,
  "name": "Shayan Pourahmad",
  "username": "Shayan",
  "email": "shayan.pourahmad@gmail.com"
}
```

---

### **3️⃣ POST /api/v1/user/login**
**Description:** Validates user credentials using `user.json`.  
**Request Body:**
```json
{
  "username": "Shayan",
  "password": "@Shayan1379"
}
```

**Valid Response:**
```json
{
  "status": true,
  "message": "User Is valid"
}
```

**Invalid Username Response:**
```json
{
  "status": false,
  "message": "User Name is invalid"
}
```

**Invalid Password Response:**
```json
{
  "status": false,
  "message": "Password is invalid"
}
```

---

### **4️⃣ GET /api/v1/user/logout/:username**
**Description:** Logs out the user and returns an HTML message.  
**Example Response:**
```html
<b>Shayan successfully logout.</b>
```

---

## 🧠 Error Handling
All unhandled server errors are caught by middleware:
```js
app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});
```

---

## 🧰 Dependencies
| Package | Version | Purpose |
|----------|----------|----------|
| **express** | ^4.17.1 | Web framework for Node.js |
| **mongoose** | ^8.x | MongoDB ODM for Node.js |
| **dotenv** | ^16.x | Environment variable management |

---

## ☁️ MongoDB Atlas Configuration
- **Cluster Name:** `comp3123-exec05`
- **Provider:** AWS (N. Virginia)
- **Database User:** `shayanpsd321_db_user`
- **Database Connected Successfully** via Mongoose.

### Connection String Example:
```
mongodb+srv://shayanpsd321_db_user:<password>@comp3123-exec05.eqnsl50.mongodb.net/comp3123_exec05
```

---

## 📸 Screenshots Included
All screenshots are in the `/screenshots` folder:
- ✅ MongoDB Atlas Setup
- ✅ Cluster Connection String
- ✅ Database User & Network Access
- ✅ Postman Tests:
  - `/home`
  - `/profile`
  - `/login` (valid/invalid)
  - `/logout`
- ✅ Terminal Output (MongoDB Connected)

---

## 🧾 Author
**Name:** Shayan Pourahmad  
**Student ID:** 101474651  
**Email:** shayan.pourahmad@gmail.com  
**GitHub:** [https://github.com/<your-username>](https://github.com/<your-username>)

---

## 🏁 Status
✅ Completed and tested successfully.  
All routes work correctly with Express.js, MongoDB Atlas, and Postman.  
Project packaged and submitted as:
```
101474651_COMP3123-exec05.zip
```
