# 🛠️ Online Market system

This project implements a basic **Admin Dashboard** layout using **Node.js**, **Express.js**, and **EJS templating**. The dashboard is divided into two main sections:

- A **left sidebar** with user icon, name, logout button, and navigation links.
- A **right content section** that updates dynamically based on the selected item from the sidebar.

---

## 🚀 Features

- User-friendly and responsive admin layout
- Sidebar with:
  - User Profile icon
  - Admin Name
  - Logout Button
  - Navigation links: `Statistics`, `Job Posts`, `Users`, `Applications`
- Dynamic main content area (EJS-based view rendering)
- Clean and maintainable folder structure

---



## HOME PAGE(Online Marketing)
![image](https://github.com/jotkaur-6284/upgrade-online-market/blob/main/src/img/1.PNG?raw=true)

---

## CART PAGE
### if user is login then it will add the items in the cart page 
![image](https://github.com/jotkaur-6284/upgrade-online-market/blob/main/src/img/2.PNG?raw=true)

---


## CATALOG PAGE
![image](https://github.com/jotkaur-6284/upgrade-online-market/blob/main/src/img/3.PNG?raw=true)

---


## BUY PAGE
### It will check first user is login or not if user is login then user can buy product otherwise "login first" also apply the filters
![image](https://github.com/jotkaur-6284/upgrade-online-market/blob/main/src/img/4.PNG?raw=true)

---

## PRODUCT DESCRIPTION PAGE 
### show the detailed description of the product (if add to cart then product shows in the cart page)
![image](https://github.com/jotkaur-6284/upgrade-online-market/blob/main/src/img/5.PNG?raw=true)

---

## DETAIL ABOUT PRODUCT 
### show the full detail about the product and user can also change the address 
![image](https://github.com/jotkaur-6284/upgrade-online-market/blob/main/src/img/6.PNG?raw=true)

---

## CHANGE ADDRESS
![image](https://github.com/jotkaur-6284/upgrade-upgrade-online-market/blob/main/src/img/7.PNG?raw=true)

---

## payment (using stripe)
### after filling the details user can but that product
![image](https://github.com/jotkaur-6284/online-market/blob/main/src/img/8.PNG?raw=true)

---

## SELL PAGE
### after log in user can sell the product
![image](https://github.com/jotkaur-6284/online-market/blob/main/src/img/9.PNG?raw=true)

---

## DB
### All the login data , signup data , cart data is stored in the db (mongo db)
![image](https://github.com/jotkaur-6284/online-market/blob/main/src/img/10.PNG?raw=true)

---

## CART DATA
### when user add the product in the cart that is displayed in the cart bpage as well as save that data by user id in the db
![image](https://github.com/jotkaur-6284/online-market/blob/main/src/img/11.PNG?raw=true)

---


 **Tech Stack**
   - **Frontend**: React.js
   - **Backend**: Node.js + Express
   - **Database**: MongoDB (Mongoose)
   - **Payments**: Stripe
  
**User Authentication**
   - JWT-based login system
   - Secure password hashing with bcrypt

**Product Catalog APIs**
   - CRUD routes for products (title, description, price, image)

**Stripe Integration**
   - Created secure payment API routes
   - Integrated Stripe.js for frontend flow

**Pages Implemented**
   - Home Page (Product Listing)
   - Product Details Page
   - Signup/Login Pages
   - Cart Page
   - Checkout Page (Stripe)

**Product Listing & Search**
    - Grid layout for products
    - Search and filter by price/category

  
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



working live frontend 
https://upgrade-marketing.netlify.app/
