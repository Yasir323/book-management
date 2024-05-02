const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const createLog = require("./middlewares/loggingMiddleware.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(createLog);
app.use(helmet());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/book_management_db');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Swagger API Documentation
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Management API',
      version: '1.0.0',
      description: 'API for managing books with user authentication'
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`
      }
    ]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
