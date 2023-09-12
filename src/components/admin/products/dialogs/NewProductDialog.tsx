import { FsDialog } from "@/components/dialogs/FsDialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@prisma/client";
import React, { useState } from "react";
import { productsRouter } from "../../../../lib/server/routers/products";
import { trpc } from "@/lib/trpc/client";

interface Props {
  open: boolean;
  onClose: () => void;
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
export const NewProductDialog = ({ open, onClose }: Props) => {
  const [formData, setFormData] = useState<Product>(EMPTY_FORMDATA);
  const utils = trpc.useContext();
  const { mutate: createProduct } = trpc.products.createProduct.useMutation({
    onSuccess: () => {
      onClose();
      utils.products.invalidate();
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
        <Button onClick={() => createProduct(formData)}>Přidat</Button>
      </div>
    </FsDialog>
  );
};
