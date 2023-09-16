import { FsDialog } from "@/components/dialogs/FsDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc/client";
import { Product } from "@prisma/client";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Loader2, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Uploader } from "../Uploader";
import { CldImage } from "next-cloudinary";

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
  const [formImages, setFormImages] = useState<string[]>(
    product.img.split(", ")
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const utils = trpc.useContext();
  const { mutate: updateProduct } = trpc.products.updateProduct.useMutation({
    onSuccess: (data) => {
      console.log(data.img);
      utils.products.getProducts.invalidate();
      setImages([]);
      onClose();
    },
  });
  useEffect(() => {
    setFormImages((prev) => prev.concat(images));
  }, [images]);

  const handleSave = () => {
    updateProduct({
      ...formData,
      img: formImages.join(", "),
    });
    setImages([]);
  };
  const handleDeleteCldImage = async (publicId: string) => {
    const res = await fetch("/api/deleteCldImage", {
      method: "DELETE",
      body: JSON.stringify({
        publicId,
      }),
    });
  };
  return (
    <FsDialog open={open} onClose={onClose} title="Úprava produktu">
      <div className="flex flex-col items-center justify-center h-full gap-4 mx-auto mt-5 mb-28">
        <div className="formWrapper flex flex-col max-w-lg gap-2">
          <div className="w-full">
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
          <div className="flex flex-row items-center gap-2">
            <Label className="w-fit whitespace-nowrap">Best seller: </Label>
            <Select
              defaultValue={formData.featured.toString()}
              onValueChange={(val) =>
                setFormData((prev) => ({ ...prev, featured: Boolean(val) }))
              }
            >
              <SelectTrigger className="flex-grow-1">
                <SelectValue placeholder="BestSeller" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"true"}>Ano</SelectItem>
                <SelectItem value={"false"}>Ne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Uploader
            setImages={setImages}
            images={images}
            setIsUploading={setIsUploading}
            isUploading={isUploading}
            label="Přidat obrazky"
          />
        </div>
        <div className="grid grid-cols-3">
          {formImages.map((img, idx) => (
            <div className="relative" key={`Image_${idx}`}>
              <div className="absolute top-0 p-1 flex justify-end w-full">
                {/* <Button size={"icon"}>
                  <Star size={"1.5rem"} />
                </Button> */}
                <Button
                  size={"icon"}
                  variant={"destructive"}
                  onClick={() => {
                    handleDeleteCldImage(img);
                    setFormImages((prev) => prev.filter((p) => p !== img));
                  }}
                >
                  <Trash size={"1.5rem"} />
                </Button>
              </div>
              <CldImage
                key={img}
                src={img}
                alt={formData.name}
                className="aspect-square object-cover"
                height={200}
                width={200}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 bg-background px-6 py-4 inset-x-0 shadow-lg shadow-primary flex justify-end gap-6">
        <Button variant={"destructive"} onClick={() => onClose()}>
          Zrušit
        </Button>
        <Button
          disabled={isUploading}
          onClick={() => handleSave()}
          className="w-fit"
        >
          {isUploading ? (
            <>
              <Loader2 className="animate-spin" /> Načítání
            </>
          ) : (
            "Upravit"
          )}
        </Button>
      </div>
    </FsDialog>
  );
};
