# Personal Website - [www.rbbozkurt.com](www.rbbozkurt.com) 
This is the repository for the `rbbozkurt-website`. It includes both the **frontend** (React, Material UI) and **backend** (Node.js, Express, MongoDB) parts. The frontend is built using ReactJS with Material UI components, while the backend is implemented with Node.js and Express, using MongoDB as the database.

## Table of Contents

- [Personal Website - www.rbbozkurt.com](#personal-website---wwwrbbozkurtcom)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
  - [Frontend](#frontend)
    - [Frontend Architecture](#frontend-architecture)
    - [Frontend Dependencies](#frontend-dependencies)
    - [Environment Variables (.env)](#environment-variables-env)
  - [Backend](#backend)
    - [Backend Architecture](#backend-architecture)
    - [Backend Dependencies](#backend-dependencies)
    - [Environment Variables (.env)](#environment-variables-env-1)
  - [API Endpoints](#api-endpoints)
    - [Blogs API](#blogs-api)
    - [Projects API](#projects-api)

---

## Installation

To get started with this project, clone the repository and install the dependencies for both the frontend and backend.

```bash
git clone https://github.com/rbbozkurt/rbbozkurt-website.git
cd rbbozkurt-website
````

### Frontend Setup

```bash
cd frontend
npm install
npm start

```

### Backend Setup

```bash
cd backend
npm install
npm run watch # uses nodemon

```

## Frontend

The frontend is built using **React** and **Material UI 5**, and employs **Redux** for managing the global state across the application. **React Hooks** like `useEffect` and `useState` are extensively used to handle side effects and local state. **Axios** is used for making HTTP requests to the backend, and **Redux Thunk** is used for managing asynchronous actions in Redux.


### Frontend Architecture

- **React Functional Components:** All components are written as functional components for simplicity and performance.
- **Redux:** Redux is used for better data management and state handling across components, allowing the app to efficiently manage global state.
- **React Hooks:** The application makes extensive use of hooks like useState, useEffect, and useDispatch to handle component lifecycle and state management.
- **Material UI:** Material UI provides a set of modern and customizable components for building the user interface.
- **Routing:** react-router-dom is used for client-side routing, enabling smooth navigation across different parts of the app.
- **Axios:** Axios is used for making HTTP requests to the backend and managing API calls efficiently.

### Frontend Dependencies 

- @emotion/react: CSS-in-JS library for styling.
- @emotion/styled: Allows you to style components using the styled API.
- @mui/icons-material: Material-UI icons.
- @mui/material: Material-UI components.
- axios: For making HTTP requests to the backend.
- moment: For handling date and time.
- react: Core React library.
- react-dom: For rendering React components.
- react-file-base64: For uploading files as Base64.
- react-redux: For state management using Redux.
- redux: Redux library for state management.
- redux-thunk: Middleware for handling async actions in Redux.
- react-router-dom: For handling routes in the application.
- eslint: Linter for code quality.
- eslint-config-airbnb: Airbnb’s ESLint configuration.
- eslint-plugin-import: ESLint plugin for managing import statements.
- eslint-plugin-jsx-a11y: ESLint plugin for accessibility checks in JSX.
- eslint-plugin-react: ESLint plugin for React best practices.
- eslint-plugin-react-hooks: ESLint plugin for ensuring React hooks are used correctly.


### Environment Variables (.env)

The frontend uses environment variables to configure the connection to backend. Create a .env file in the backend directory and define the following:

```bash
SKIP_PREFLIGHT_CHECK=true
REACT_APP_API_BASE_URL=backendUrl
```

## Backend

The backend is built with **Node.js** and **Express**. It follows a clean code architecture, separating the **router** and **controller** logic for maintainability and scalability. The backend communicates with **MongoDB** via **Mongoose**, and uses **AWS S3** for image storage. **dotenv** is used to manage environment variables, and **Lodash** provides utility functions for cleaner code.

### Backend Architecture

- **Router-Controller Structure:** The backend is structured with separate routers and controllers to keep the code modular and maintainable.
- **Express:** Express handles the API routing and middleware management.
- **Mongoose:** Mongoose is used for MongoDB object modeling and to define schemas for blogs and projects.
- **AWS S3:** AWS SDK is used for interacting with S3 for image uploads, and pre-signed URLs are generated for secure image access.
- **dotenv:** Environment variables are managed securely using dotenv.

### Backend Dependencies

- @aws-sdk/client-s3: AWS SDK for interacting with S3 storage.
- @aws-sdk/s3-request-presigner: To generate pre-signed URLs for S3 objects.
- body-parser: Middleware for parsing incoming request bodies.
- cors: Middleware for enabling Cross-Origin Resource Sharing.
- dotenv: For managing environment variables.
- express: Fast and minimalist web framework for Node.js.
- http-status-codes: Constants for HTTP status codes.
- lodash: Utility library for working with arrays, numbers, objects, strings, etc.
- mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
- eslint: Linter for code quality.

### Environment Variables (.env)

The backend uses environment variables to configure the connection to MongoDB and AWS S3. Create a .env file in the backend directory and define the following:

```bash
MONGODB_USERNAME=yourMongoDBUsername
MONGODB_PASSWORD=yourMongoDBPassword
MONGODB_CLUSTER=yourMongoDBCluster
PORT=5002
AWS_ACCESS_KEY_ID=yourAWSAccessKey
AWS_SECRET_ACCESS_KEY=yourAWSSecretAccessKey
AWS_BUCKET_NAME=yourS3BucketName
```


## API Endpoints

Here are the key API endpoints provided by the backend:

### Blogs API 

- `GET /api/blogs` -> Fetch all blogs.
- `GET /api/blogs/:id` ->  Fetch a specific blog by ID.
- `POST /api/blogs` -> Create a new blog.
- `PUT /api/blogs/:id` -> Update a specific blog by ID.
- `DELETE /api/blogs/:i`d -> Delete a specific blog by ID.

### Projects API

- `GET /api/projects` -> Fetch all projects.
- `GET /api/projects/:id` -> Fetch a specific project by ID.
- `POST /api/projects` -> Create a new project.
- `PUT /api/projects/:id` -> Update a specific project by ID.
- `DELETE /api/projects/:id` -> Delete a specific project by ID.