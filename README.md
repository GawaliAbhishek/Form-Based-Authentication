

# Express.js and EJS Form-Based Authentication App with MongoDB

[See Live Project](https://form-based-authentication-dev.onrender.com/)

## Project Overview

This repository, named "Form-Based-Authentication," contains a web application built using Express.js, EJS, and MongoDB. The application provides a secure form-based authentication system. Users can sign up, log in, and access protected resources while their data is securely stored in a MongoDB database. The purpose of this README is to guide you through the setup and usage of the application.

## Prerequisites

Before you get started with the project, ensure that you have the following prerequisites in place:

- Node.js and NPM installed
- MongoDB installed and running
- Basic knowledge of Express.js, EJS, and MongoDB

## Installation

1. Clone the "Form-Based-Authentication" repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/Form-Based-Authentication.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Form-Based-Authentication
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Configuration

In order to run the application successfully, you need to configure a few settings. Create a `.env` file in the root directory of the project and set the following environment variables:

```plaintext
MONGO_URI=your_mongodb_connection_uri
```

- `MONGO_URI`: Replace `your_mongodb_connection_uri` with the actual connection string for your MongoDB database.

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Access the "Form-Based-Authentication" application in your web browser by navigating to `http://localhost:8080`.

3. You can now register, log in, and access protected routes within the application.

## Folder Structure

The project's folder structure is organized as follows:

- `Server.js`: The main Express.js application file.
- `src/`: Contains all files and modules.
- `routes/`: Includes controller logic for handling user authentication and routes.
- `models/`: Defines MongoDB data models.
- `public/`: Contains static assets such as CSS, images, and client-side JavaScript.
- `templates/`: Contains EJS templates for rendering views.
- `Services/`: Contains various services used in project.
- `package.json`: Project dependencies and scripts.
- `.env`: Environment variable configuration file (not included in the repository).

 ## Preview to output

 ![Screenshot from 2023-10-11 23-19-37](https://github.com/GawaliAbhishek/Form-Based-Authentication/assets/89680568/a16b7891-8015-43ce-bbc7-932b51953b1f)

 ![Screenshot from 2023-10-11 23-19-48](https://github.com/GawaliAbhishek/Form-Based-Authentication/assets/89680568/727a745d-9eda-43d2-a427-3fed852b0e67)

 

## Contributing

Contributions to the "Form-Based-Authentication" project are welcome. You can contribute by creating issues, suggesting enhancements, or opening pull requests. Please follow the project's coding standards and guidelines.
