import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/users";
import bcrypt from "bcrypt";

connectDB();
export const GET = async (request) => {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "failed to get users",
    });
  }

  return NextResponse.json(users);
};

export const POST = async (request) => {
  const { name, email, password, about } = await request.json();

  const user = new User({
    name,
    email,
    password,
    about,
  });

  try {
    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    const createUser = await user.save();
    return NextResponse.json(user, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json(
      {
        message: "failed to create User",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
};

export const DELETE = (request) => {
  return NextResponse.json(
    {
      status: true,
      message: "user deleted Succesfully",
    },
    { status: 201, statusText: "done" }
  );
};
export const PUT = () => {};
