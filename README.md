# 🔐 PassManager – Password Manager (MongoDB)

PassManager is a secure full-stack password management web application built using Next.js and MongoDB.  
It allows users to store, manage, and retrieve their credentials in an organized and efficient manner.

---

## 🚀 Features

- Add and store website credentials
- View saved passwords securely
- Delete saved credentials
- MongoDB database integration
- Clean and responsive UI
- REST API support
- Dynamic routing with Next.js

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Next.js 14 | Frontend & Backend (App Router) |
| React      | UI Components |
| MongoDB    | Database |
| Node.js    | Server Environment |
| CSS / Tailwind | Styling |

---

## 📂 Project Structure

```
PassManager-MongoDB/
│
├── app/
│   ├── api/                # API routes for CRUD operations
│   └── page.js             # Main dashboard
│
├── components/             # Reusable UI components
├── lib/
│   └── mongodb.js          # MongoDB connection setup
│
├── public/                 # Static files
└── package.json
```

---

## ⚙️ How It Works

1. User enters website name, username, and password.
2. Data is sent to the backend API.
3. Credentials are stored securely in MongoDB.
4. Stored passwords are fetched and displayed dynamically.
5. Users can delete entries when needed.

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/PassManager-MongoDB.git
cd PassManager-MongoDB
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### ➤ Add Password
`POST /api/passwords`

### ➤ Get All Passwords
`GET /api/passwords`

### ➤ Delete Password
`DELETE /api/passwords`

---

## 🌍 Deployment

You can deploy this project on:

- Vercel (Recommended)
- Netlify
- Any Node.js hosting platform

Make sure to configure environment variables in the deployment dashboard.

---

## 🔒 Security Note

Currently, passwords are stored in the database.  
Future versions should implement:

- Password encryption (bcrypt)
- User authentication (JWT/Auth)
- End-to-end encryption
- Environment variable security best practices

---

## 📈 Future Enhancements

- User authentication system
- Password strength checker
- Copy-to-clipboard feature
- Edit password functionality
- Dark mode
- Role-based access control

---

## 👨‍💻 Author

Developed as a full-stack password manager project using Next.js and MongoDB.

---

## 📜 License

This project is licensed under the MIT License.
