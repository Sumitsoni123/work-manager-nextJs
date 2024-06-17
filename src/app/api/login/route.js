import { User } from "@/models/users";
import { NextResponse } from "next/server";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";

connectDB();
export const POST = async (request) => {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    if (user) {
      const matched = await brcypt.compare(password, user.password);
      if (matched) {
        const token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
          },
          process.env.JWT_KEY
        );

        const response = NextResponse.json({
          success: true,
          message: "Login Successfull",
          user: user,
        });
        response.cookies.set("authToken", token, {
          expires: "1d",
          httpOnly: true,
        });

        return response;
      } else {
        throw new Error("password not matched");
      }
    } else {
      throw new Error("no user found");
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        status: false,
      },
      {
        status: 500,
      }
    );
  }
};
