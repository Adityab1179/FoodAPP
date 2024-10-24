# Food App

## Project Overview

The **Food App** is a web application built using React that provides restaurant listings, offers, restaurant-specific details, and user interactions like adding items to the cart. The app is fully responsive and uses real-world API integration to fetch data about restaurants.

## Features

- **Restaurant Listings**: Displays a list of available restaurants based on the user's location.
- **Restaurant Details**: View detailed information about a selected restaurant.
- **Offers Section**: Displays a page with current offers available at restaurants.
- **Cart Functionality**: Allows users to add items to a cart for future checkout.
- **User Context**: Includes user information, such as logged-in user name, that can be updated dynamically.
- **Online Status Indicator**: Shows whether the user is currently online.
- **Fully Responsive UI**: Tailored to provide a great user experience across devices.

## Technologies Used

- **React.js**: Component-based library for building user interfaces.
- **React Router**: Used for client-side routing to manage different pages (like Offers, Help, Restaurant details, etc.).
- **Redux**: For state management, especially for handling the cart data.
- **Tailwind CSS**: Utility-first CSS framework for building responsive layouts.
- **JavaScript (ES6)**: For handling business logic.
- **Custom Hooks**: Like `useOnlineStatus` for monitoring user connectivity.
- **Context API**: For managing global state, such as the logged-in user data.
- **Font Awesome**: For adding icons to enhance the user interface.
- **Proxy Middleware**: For resolving CORS issues with the external APIs.

## Installation and Setup Instructions

1. **Clone the repository**:

    git clone https://github.com/Adityab1179/Food-App.git
2. **Navigate to the project directory:**
    cd Food-App
3. **Install dependencies: Make sure you have Node.js installed, then run:**
    npm install
4. **Run the app: Start the development server:**
    npm start
# Routing Structure
    The app uses React Router for client-side navigation. Here are the routes available in the application:

    / : Home page, displaying the list of restaurants.
    /offers : A page showing current restaurant offers.
    /help : Help page for FAQs and customer support.
    /cart : Displays items that the user has added to the cart.
    /restaurant/:resId : Detailed view of a specific restaurant's information. 

# Context and State Management
    User Context: The UserContext is used to manage the user's logged-in state globally. It allows the username to be updated dynamically across components.
    Redux Store: The appStore.js uses Redux for managing global state such as the cart. This allows multiple components to access and update cart data without needing to pass props through the component tree.

# Contributing
    Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.
   
