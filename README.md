# Employee Management System

A full-stack web application for managing employees, built using React (frontend) and Node.js + Express (backend), with a MySQL database. Designed to handle employee records, departments, tasks, and admin control efficiently.

## 📁 Project Structure
```
EmployeeManagementSystemWebApp/
├── EmployeeMS/               # React frontend
│   ├── src/
│   │   ├── Components/       # All page components (Dashboard, Task, Project, etc.)
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
├── Server/                   # Node.js backend
│   ├── Routes/               # Express routes (AdminRoute.js, etc.)
│   └── index.js              # Main Express server entry
│
├── package.json              # Project config
├── .gitignore
└── README.md
```

## 🚀 Features


## 🛠️ Technologies Used

### Frontend

- React
- React Router
- Tailwind CSS / Bootstrap (if used)

### Backend

- Node.js
- Express
- MySQL
- dotenv for environment management
- bcrypt & JWT for authentication


## Prerequisites

- Node.js (v16+ recommended)
- MySQL
- npm or yarn

## 📦 Install Dependencies
### Frontend:
```
cd EmployeeMS
npm install
```
### Backend:
```
cd ../Server
npm install
```

## 🔧 Running the Project

### 1. Start the Backend API
```
cd Server
node index.js
```

### 2. Start the Frontend App
```
cd ../EmployeeMS
npm start
```

### 3. Open in Browser
```
http://localhost:3000
```

## 🔐 Environment Setup
```
Create a .env file in the Server/ folder:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=ems
JWT_SECRET=your-secret-key
```
## ✅ To Do (Future Improvements)

- User role-based login (admin/employee)
- Image upload for profiles
- Attendance or leave tracking module
- Dark mode toggle
- Deployment with Docker or Vercel + Railway

