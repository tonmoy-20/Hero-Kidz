import Link from "next/link";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <BiSolidErrorAlt size={100} className="mx-auto text-primary" />

        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Link href={"/"} className="btn btn-outline mt-4">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
