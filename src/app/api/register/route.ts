import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password, phone, location, confirm_password } =
      await request.json();

    // Check if any required field is missing
    if (
      !name ||
      !email ||
      !password ||
      !confirm_password ||
      !phone ||
      !location
    ) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new NextResponse("Invalid email format", { status: 400 });
    }

    // Validate phone number format (if needed)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return new NextResponse("Invalid phone number format", { status: 400 });
    }

    // Check if passwords match
    if (password !== confirm_password) {
      return new NextResponse("Passwords do not match", { status: 400 });
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already registered", { status: 400 });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      location,
    });

    // Save the new user
    const savedUser = await newUser.save();

    // Send verification email
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    console.log("Email sent successfully");

    return new NextResponse("User registered successfully", { status: 201 });
  } catch (err: any) {
    console.error("Error:", err);
    if (err.name === "ValidationError") {
      // Handle validation errors separately
      return new NextResponse(err.message, { status: 400 });
    } else {
      return new NextResponse("Internal server error", { status: 500 });
    }
  }
};
