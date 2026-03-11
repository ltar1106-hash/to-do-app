// Imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import taskRoutes from './routes/tasks.js'
import userRoutes from './routes/auth.js'

// App Setup
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://to-do-app-frontend-red.vercel.app', // this is to allow our frontend to communicate with our backen
  methods: ['GET','POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}),);

// MongoDB Connection
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB Database');
} catch (error) {
  console.error('MongoDB connection error', error);
}

// Routes
app.use('/tasks', taskRoutes); 
app.use('/auth', userRoutes) 

// Start Server
app.listen(PORT, () => {
  console.log('');
  console.log('========================================');
  console.log('Server is running on http://localhost:' + PORT);
  console.log('========================================');
  console.log('');
});
