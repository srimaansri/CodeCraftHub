# 🛠️ User Management Service

A simple and scalable RESTful API built using **Node.js**, **Express**, and **MongoDB** that handles user registration, login, and profile updates. Secure authentication is handled via **JWT tokens**, and passwords are safely hashed using **bcrypt**. This project is Dockerized and ready to deploy.

---

## 🚨 Tech Stack & Tools

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## ✨ Features

- 🔐 User registration and login with email and password
- 🔒 Secure password hashing with bcrypt
- 🪪 JWT-based authentication
- 🛠️ Modular code structure with MVC pattern
- 🐳 Dockerized environment using Docker Compose

---

## 🧪 API Endpoints

### 📩 Register
`POST /api/users/register`

**Body:**
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/CodeCraftHub.git
cd user-management-service
2. Set Up Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
MONGO_URL=mongodb://root:your_password@localhost:27017/your_db_name
JWT_SECRET=your_secret_key
PORT=5000
3. Build and Run with Docker
bash
Copy
Edit
docker-compose up --build
Application will be running on: http://localhost:5000

🛢️ Database
This application uses MongoDB as its database for storing user information. By default, the service connects to a MongoDB instance using the connection string provided in the .env file:

env
MONGO_URL=mongodb://root:your_password@localhost:27017/your_db_name
If you're using Docker, a MongoDB container is automatically created and networked with the Node.js application via docker-compose.

⚠️ The MongoDB instance uses the default port 27017 and stores data in the mongo-data volume as defined in docker-compose.yml.

You can interact with the MongoDB database using:
mongosh mongodb://root:your_password@localhost:27017/your_db_name

🗂️ Folder Structure
pgsql
Copy
Edit
user-management-service/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── app.js
│   └── server.js
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
📘 License
This project is open source and available under the MIT License.

