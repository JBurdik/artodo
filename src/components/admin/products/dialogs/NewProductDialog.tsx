import { FsDialog } from "@/components/dialogs/FsDialog";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import React, { useState } from "react";

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
  return (
    <FsDialog open={open} title="Přidat produkt" onClose={onClose}>
      <div className="flex flex-col">
        <input
          className="border border-primary"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <textarea
          className="border border-primary"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, desc: e.target.value }))
          }
        />
        <input
          className="border border-primary"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, price: Number(e.target.value) }))
          }
        />
        <input
          className="border border-primary"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, stock: Number(e.target.value) }))
          }
        />
        <input
          className="border border-primary"
          type="checkbox"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, featured: e.target.checked }))
          }
        />
        <Button>Přidat</Button>
      </div>
    </FsDialog>
  );
};
