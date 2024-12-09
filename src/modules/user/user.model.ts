import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherLastName : { type: String, required: true },
  motherLastName : { type: String, required: false },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export const UserModel = mongoose.model('User', UserSchema);
