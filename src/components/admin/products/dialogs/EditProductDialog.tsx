import { FsDialog } from "@/components/dialogs/FsDialog";
import React, { useState } from "react";
import { Uploader } from "../Uploader";
import { Product } from "@prisma/client";
import { trpc } from "@/lib/trpc/client";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  product: Product;
}

const EMPTY_FORMDATA: Product = {
  id: "",
  name: "",
  desc: "",
  img: "",
  price: 0,
  stock: 0,
  featured: false,
};

export const EditProductDialog = ({ open, onClose, product }: Props) => {
  const [formData, setFormData] = useState<Product>(product);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const utils = trpc.useContext();
  return (
    <FsDialog open={open} onClose={onClose} title="Úprava produktu">
      <div className="flex flex-col items-center justify-center inset-0 overflow-y-auto gap-4 max-w-lg mx-auto">
        <div>
          <Label>Jméno produktu:</Label>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div>
          <Label>Popis produktu:</Label>
          <Textarea
            value={formData.desc}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, desc: e.target.value }))
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Cena:</Label>
            <Input
              value={formData.price}
              type="number"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  price: Number(e.target.value),
                }))
              }
            />
          </div>
          <div>
            <Label>Skladová zásoba:</Label>
            <Input
              value={formData.stock}
              type="number"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  stock: Number(e.target.value),
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Label>Best seller: </Label>
          <Checkbox
            checked={formData.featured}
            onCheckedChange={(e: boolean) => {
              setFormData((prev) => ({ ...prev, featured: e }));
            }}
          />
        </div>
        <Uploader
          setImages={setImages}
          images={images}
          setIsUploading={setIsUploading}
          isUploading={isUploading}
          label="Nahrat obrazky"
        />
        <div className="flex flex-row">
          {formData.img.split(", ").map((img) => (
            <Image
              key={img}
              src={img}
              alt={formData.name}
              height={200}
              width={200}
            />
          ))}
        </div>
        <Button disabled={isUploading} onClick={() => true}>
          {isUploading ? (
            <>
              <Loader2 className="animate-spin" /> Načítání
            </>
          ) : (
            "Přidat"
          )}
        </Button>
      </div>
    </FsDialog>
  );
};
