import mongoose from 'mongoose';

//mongoose ko schema banae me use kiya jata hai..
const userSchema = new mongoose.Schema(
  {
    // data ka fields hai jisme data liya jata hai
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
