"use client";
import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/app/context/userContext";
import { toast } from "react-toastify";
import { logout } from "@/services/userService";

const CustomNavbar = () => {
  const context = useContext(UserContext);

  const doLogout = async () => {
    try {
      const response = await logout();
      context.setUser(undefined);
      toast.success(response.message);
    } catch (error) {
      toast.error("could not logout");
    }
  };

  return (
    <nav className="bg-blue-500 h-12 px-4 py-2 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      {context.user && (
        <>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href="/show-tasks" className="hover:text-blue-200">
                  Show Tasks
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <div>
        <ul className="flex space-x-4">
          {context.user ? (
            <>
              <li>
                <Link href="/#" className="hover:text-blue-200">
                  {context.user.name}
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  onClick={doLogout}
                  className="hover:text-blue-200"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-blue-200">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-200">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
