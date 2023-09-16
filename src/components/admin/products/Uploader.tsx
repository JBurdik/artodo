import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, Loader2, Upload } from "lucide-react";
import React, { useRef } from "react";

interface UploaderProps {
  setIsUploading: React.Dispatch<React.SetStateAction<boolean>>;
  isUploading: boolean;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  images: string[];
  label?: string;
  className?: string;
}

type UploadResult = {
  public_id: string;
  secure_url: string;
};

export const Uploader = ({
  setIsUploading,
  isUploading,
  setImages,
  images,
  label,
  className,
}: UploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleUploadImages = async (data: FileList) => {
    let i = 0;
    setIsUploading(true);
    const files = Array.from(data);
    files.forEach(async (file) => {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", "cadqvpuc");
      const result: UploadResult = await fetch(
        "https://api.cloudinary.com/v1_1/dfzbfw9y4/image/upload",
        {
          method: "POST",
          body: fd,
        }
      ).then((r) => r.json());
      console.log(result);
      setImages((prev) => [...prev, result.secure_url]);
      i++;
      if (files.length === i) setIsUploading(false);
    });
  };
  return (
    <>
      <Button
        variant={"secondary"}
        className={cn(
          className,
          "flex flex-row items-center justify-center gap-2"
        )}
        onClick={() => inputRef.current?.click()}
      >
        {isUploading ? (
          <Loader2 className="animate-spin" />
        ) : images.length > 0 ? (
          <>
            <ImageIcon />
            {images.length}
          </>
        ) : (
          <>
            <Upload />
            {label}
          </>
        )}
      </Button>
      <Input
        ref={inputRef}
        className="hidden"
        type="file"
        multiple
        onChange={(e) => {
          if (e.target.files) handleUploadImages(e.target.files);
          return;
        }}
      />
    </>
  );
};
