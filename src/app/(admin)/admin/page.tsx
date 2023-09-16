"use client";
import { adminTitleState } from "@/atoms/adminTitle";
import { ModeToggle } from "@/components/theme-toggle-button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminPage = () => {
  const setTitle = useSetRecoilState(adminTitleState);
  useEffect(() => {
    setTitle("Dashboard");
  }, [setTitle]);
  return (
    <div>
      AdminPage
      <ModeToggle />
      <Link
        href={"/api/auth/signin"}
        className={buttonVariants({ variant: "outline" })}
      >
        Log In
      </Link>
    </div>
  );
};

export default AdminPage;
