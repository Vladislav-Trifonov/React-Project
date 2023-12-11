# React-Project

This is my project for the October 2023 React course in SoftUni. 

I have used SoftUni's practice server for the back-end and React for the front-end. 

The main purpose of the application is to allow users to create profiles, upload products and to edit the products that they have created.

## The following features are available: 

- Login using valid credentials
- Register
- View the list of all the products
- View the details about each product
- Edit/Delete a given product (if you are the one who created the product)
- Like a product (if you are logged in and you are not the owner of the product)
- Search for a particular product
- View your personal profile, where you can see all the products that you have added

  ## Demo accounts

  The following three demo accounts are available:

- Email: peter@abv.bg
- Password: 123456

- Email: george@abv.bg
- Password: 123456

- Email: admin@abv.bg
- Password: 123456

  ## Deployment

In order to run the application locally on your device, follow the next steps: 

- while in the main directory of the project open a new terminal and run "cd sj-products", then run "npm install" and finally "npm run dev" - this will initiate the React app on localhost:5137/
- after that open a new terminal and run "cd server", then "node server.js" - this will start the server on localhost:3030/
