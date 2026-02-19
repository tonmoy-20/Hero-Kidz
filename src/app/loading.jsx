import Logo from "@/components/layouts/Logo";
import React from "react";

const loading = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-5xl font-bold animate-pulse">Please Wait ....</h2>
      <div className="animate-ping">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default loading;
