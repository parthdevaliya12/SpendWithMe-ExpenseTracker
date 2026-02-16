SpendWithMe – Expense Tracker (MERN Stack)

SpendWithMe is a full-stack Expense Tracker web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to manage their daily expenses efficiently with a clean and responsive user interface.

🚀 Project Overview

This application helps users:

Add new expenses

Edit existing expenses

Delete expenses

View total spending

Filter expenses by category

Manage financial records efficiently

The frontend is developed using React, while the backend API is built using Node.js and Express. MongoDB is used as the database to store expense data.

🛠️ Tech Stack

Frontend:

React.js

HTML5

CSS3

JavaScript (ES6+)

Backend:

Node.js

Express.js

Database:

MongoDB (Local or Atlas)

Tools & Utilities:

npm

Postman (for API testing)

Git & GitHub

📁 Project Structure
SpendWithMe-ExpenseTracker/
│
├── client/        → React frontend application
├── server/        → Node & Express backend API
└── README.md

⚙️ Features

RESTful API integration

Responsive and modern UI

CRUD operations (Create, Read, Update, Delete)

Organized backend structure

MongoDB database connection

Environment variable configuration support

🌐 How It Works

The user interacts with the React frontend.

Frontend sends HTTP requests to the Express backend.

Backend processes the request and interacts with MongoDB.

The response is sent back and displayed on the UI.

🔐 Environment Variables

Create a .env file inside the server folder with the following variables:

PORT – The port number for backend server

MONGO_URI – MongoDB connection string

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string

💡 Future Enhancements

User authentication (JWT)

Expense charts and analytics

Monthly/Yearly reports

Export expenses as PDF/CSV

Dark/Light mode

📌 Author

Parth Devaliya
MERN Stack Developer

📄 License

This project is open-source and available under the MIT License.
