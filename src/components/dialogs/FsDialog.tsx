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
      <div className="flex items-center justify-center">
        <H1>{title}</H1>
        <Button
          onClick={onClose}
          variant={"icon"}
          className="bg-background text-primary absolute top-4 right-4"
        >
          <X />
        </Button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};
