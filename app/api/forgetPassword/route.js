import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoConnect";
import User from "@/utils/models/user";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectMongo();
    const { email } = await req.json();

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found", type: "error" }, { status: 404 });
    }

    // Retrieve password from the database
    const userPassword = user.password; 

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "", 
        pass: "", 
      },
    });

    // Email Content
    const mailOptions = {
      from: "your-email@gmail.com",
      to: user.email, 
      subject: "Password Recovery",
      text: `Hello,\n\nYour password is: ${userPassword}\n\nPlease change your password after logging in.`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Password has been sent to your email!", type: "success" }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Server error", type: "error" }, { status: 500 });
  }
}
