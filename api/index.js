import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

// Retrieve MongoDB connection URL from the environment variables
const M_CONNECTION_URL = process.env.M_CONNECTION_URL; // Ensure this is correctly named in the .env file

// Establish MongoDB connection
mongoose
  .connect(M_CONNECTION_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Resolve __dirname for path handling
const __dirname = path.resolve();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Serve the app on port 3100
app.listen(3100, () => {
  console.log('Server is running on port 3100!');
});

// API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '/client/dist')));

// Catch-all route for single-page application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
