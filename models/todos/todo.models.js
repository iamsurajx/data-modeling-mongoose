import mongoose from 'mongoose';

const todoSchema = new mongoose.Shema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
