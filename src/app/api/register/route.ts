import { connect } from "@/dbConfig/dbConfig";

import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();
export const POST = async (request: any) => {
  try {
    const { name, email, password, phone, location, confirm_password } =
      await request.json();

    console.log(request);

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

    if (password !== confirm_password) {
      return new NextResponse("Passwords do not match", { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already registered", { status: 400 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      location,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);

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
