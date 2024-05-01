# Book Management API

This is a simple Node.js book management API with user authentication, CRUD operations for books, and Docker containerization.

## Features

- User authentication (signup, login)
- CRUD operations for managing books (create, read, update, delete)
- Filtering books by author or publication year
- Dockerized setup for easy deployment and scalability

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Docker

## Getting Started

To run this project locally, you need to have Docker installed on your machine.

### Running Locally

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd book-management-api

2. Build and start the Docker containers:
    ```docker-compose up --build```

3. Access the API in your web browser or using tools like Postman: 
    <a href="http://localhost:3000/api-docs">API Docs</a>

## API Documentation

Swagger documentation for the API can be accessed at: 
    <a href="http://localhost:3000/api-docs">API Docs</a>


## Environment Variables

The following environment variable is required:
* MONGO_URI: MongoDB connection URI (e.g., mongodb://mongo:27017/book_management_db)
  
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
