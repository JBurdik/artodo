import { FsDialog } from "@/components/dialogs/FsDialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Loader, Loader2 } from "lucide-react";
import { Uploader } from "../Uploader";

interface Props {
  open: boolean;
  onClose: () => void;
}
type UploadResult = {
  public_id: string;
  secure_url: string;
};
const EMPTY_FORMDATA: Product = {
  id: "",
  name: "",
  desc: "",
  img: "",
  slug: "",
  price: 0,
  stock: 0,
  featured: false,
};
export const NewProductDialog = ({ open, onClose }: Props) => {
  const [formData, setFormData] = useState<Product>(EMPTY_FORMDATA);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const utils = trpc.useContext();

  const { mutate: createProduct } = trpc.products.createProduct.useMutation({
    onSuccess: () => {
      onClose();
      utils.products.invalidate();
      setImages([]);
    },
  });
  return (
    <FsDialog open={open} title="Přidat produkt" onClose={onClose}>
      <div className="flex flex-col gap-4 max-w-lg mx-auto">
        <div>
          <Label>Jméno produktu:</Label>
          <Input
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div>
          <Label>{`Odkaz (slug)`}:</Label>
          <Input
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div>
          <Label>Popis produktu:</Label>
          <Textarea
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, desc: e.target.value }))
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Cena:</Label>
            <Input
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
        <Button
          disabled={isUploading}
          onClick={() => createProduct({ ...formData, img: images.join(", ") })}
        >
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
