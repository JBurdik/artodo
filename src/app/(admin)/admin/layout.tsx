"use client";
import "../../globals.css";
import { Montserrat } from "next/font/google";
import { useRecoilValue } from "recoil";
import { AdminSidebar } from "@/components/admin/Nav";
import { adminTitleState } from "@/atoms/adminTitle";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ToggleLeft } from "lucide-react";
import { useTheme } from "next-themes";

const caveat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
});

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, theme } = useTheme();
  const adminTitle = useRecoilValue(adminTitleState);
  return (
    <>
      <AdminSidebar />
      <div className="bg-background md:ml-60 p-5">
        <div className="bg-secondary-muted p-4 rounded-md mb-4 flex items-center justify-between">
          {adminTitle}
          <div>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>
          </div>
        </div>
        <div className="bg-secondary-muted p-4 rounded-md max-h-max mb-28 md:mb-0">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
