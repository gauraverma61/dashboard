import React from "react";
import Sidebar from "../Sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-h-screen">
      <Sidebar className="flex-[0.3] xl:flex-[0.2] bg-[#151718]" />
      <div className=" flex-1">{children}</div>
    </div>
  );
};

export default SiteLayout;
