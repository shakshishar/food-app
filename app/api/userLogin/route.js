import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoConnect"; 
import User from "@/utils/models/user"; 

export async function POST(req) {
  try {
    await connectMongo();

    const { email, password } = await req.json();

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found", type: "error" }, { status: 404 });
    }

    // Check password (assuming it's stored as plain text, but hashing is recommended)
    if (password !== user.password) {
      return NextResponse.json({ message: "Incorrect password", type: "error" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful!", type: "success" }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error", type: "error" }, { status: 500 });
  }
}
