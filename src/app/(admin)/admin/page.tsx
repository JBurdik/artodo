"use client";
import { adminTitleState } from "@/atoms/adminTitle";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminPage = () => {
  const setTitle = useSetRecoilState(adminTitleState);
  useEffect(() => {
    setTitle("Dashboard");
  }, [setTitle]);
  return <div>AdminPage</div>;
};

export default AdminPage;
