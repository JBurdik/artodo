"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "../../globals.css";
import { Montserrat } from "next/font/google";
import { RecoilRoot, useRecoilValue } from "recoil";
import { AdminSidebar } from "@/components/admin/Nav";
import { adminTitleState } from "@/atoms/adminTitle";

const caveat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
});

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const adminTitle = useRecoilValue(adminTitleState);
  return (
    <>
      <AdminSidebar />
      <div className="bg-gray-300 h-screen ml-60 p-5">
        <div className="bg-white p-4 rounded-md mb-4 shadow-md shadow-foreground">
          {adminTitle}
        </div>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
