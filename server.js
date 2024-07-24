import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { config } from 'dotenv';
import opportunityRoutes from './routes/opportunityRoutes.js';
import userRoutes from './routes/userRoutes.js'; // Adjust the path as necessary


// Load environment variables from .env file
config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/opportunities', opportunityRoutes);
app.use('/api', userRoutes); // Make sure this matches the URL you are calling

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
