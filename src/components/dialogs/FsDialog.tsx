import React from "react";
import { H1 } from "../ui/H1";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface FsDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const FsDialog = ({ open, title, children, onClose }: FsDialogProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-background">
      <div className="flex items-center justify-around h-20 bg-background fixed top-0 w-full z-50">
        <h2 className="text-lg uppercase font-bold tracking-widest">{title}</h2>
        <Button onClick={onClose} variant={"ghost"} size={"icon"}>
          <X />
        </Button>
      </div>
      <div className="p-6 absolute top-10 inset-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
