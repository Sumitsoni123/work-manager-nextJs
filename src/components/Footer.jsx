"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center justify-center flex flex-col">
          <h1 className="text-3xl">Welcome to Work manager</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.et
            reprehenderit, at incidunt?
          </p>
        </div>
        <div className="text-center">
          <h1>Important Links</h1>
          <ul>
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Linkedin</Link>
            </li>
            <li>
              <Link href="#">Github</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
