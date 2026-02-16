# SpendWithMe – Smart Group Expense Management System (MERN Stack)

SpendWithMe is a full-stack **Group Expense Management** web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It allows users to create groups, split expenses equally using a unique group code, track balances, and generate professional PDF transaction reports.

---

## 🚀 Project Overview

This application helps users:

- Add new group expenses  
- Edit existing expenses  
- Delete expenses  
- Create and join groups using a **Group Code**  
- Split expenses equally among group members  
- View total group spending  
- Track individual payable and receivable balances  
- Generate transaction reports as **PDF**  
- Manage financial records efficiently  

---

## 🛠️ Technologies Used

- **Frontend:** React.js, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **PDF Generation:** PDFKit / jsPDF  
- **API Testing:** Postman  
- **Version Control:** Git & GitHub  


---

## ⚙️ Equal Split Logic

- **Individual Share** = Total Expense ÷ Number of Members  
- **Net Balance** = Paid Amount − Individual Share  

The system automatically calculates:  
- Who owes money  
- Who should receive money  
- Updated balance after every transaction  

---

## 📄 PDF Transaction Report Includes

- Group Name  
- Group Code  
- Member List  
- Total Expenses  
- Individual Balances  
- Transaction History Table  
- Date and Timestamp  




