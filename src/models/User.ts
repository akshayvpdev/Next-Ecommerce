import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
  },
  { versionKey: false, timestamps: true }
);
const User = mongoose.models.User||mongoose.model("User",UserSchema)

export default User;

