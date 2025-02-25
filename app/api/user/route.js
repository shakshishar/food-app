import User from "@/utils/models/user";
import connectMongo from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
      await connectMongo();
      const body = await req.json();
      const { name, email, contactno, address, password } = body;
      console.log("body",body)
  
    //   if (!name || !email || !contactno || !address || !password) {
    //     return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    //   }
  
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
      }
  
      const newUser = new User({ name, email, contactno, address, password });
      await newUser.save();
  
      return NextResponse.json({ message: "User registered successfully", data: newUser }, { status: 200 });
  
    } catch (error) {
      return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
    }
  }