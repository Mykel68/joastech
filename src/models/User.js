const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: "" },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
