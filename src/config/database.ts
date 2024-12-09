import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/express-ts';
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};