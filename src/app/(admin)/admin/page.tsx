"use client";
import { adminTitleState } from "@/atoms/adminTitle";
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
