import bcrypt from "bcryptjs";
import User, { UserDocument } from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: {
  json: () => Promise<{ [key: string]: string }>;
}) => {
  const { name, email, password, phone, location, confirm_password } =
    await request.json();
  await connectDB();
  try {
    // Check if any required field is missing
    if (
      !name ||
      !email ||
      !password ||
      !confirm_password ||
      !phone ||
      !location
    ) {
      return new NextResponse(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse(
        { message: "Email is already registered" },
        { status: 400 }
      );
    }

    if (password !== confirm_password) {
      return new NextResponse(
        { message: "Passwords do not match" },
        { status: 400 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser: UserDocument = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      location,
    });

    await newUser.save();

    return new NextResponse(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Error:", err);
    return new NextResponse(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
