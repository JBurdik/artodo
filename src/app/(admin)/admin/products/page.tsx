"use client";
import { adminTitleState } from "@/atoms/adminTitle";
import { Uploader } from "@/components/admin/products/Uploader";
import { EditProductDialog } from "@/components/admin/products/dialogs/EditProductDialog";
import { NewProductDialog } from "@/components/admin/products/dialogs/NewProductDialog";
import { FsDialog } from "@/components/dialogs/FsDialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc/client";
import { Product } from "@prisma/client";
import {
  Delete,
  Edit2,
  FileEdit,
  Loader2,
  Plus,
  Save,
  Trash,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CldImage } from "next-cloudinary";

const EMPTY_FORM_DATA: Product = {
  id: "",
  desc: "",
  featured: false,
  img: "",
  name: "",
  price: 0,
  stock: 0,
};

const ProductsPage = () => {
  const setTitle = useSetRecoilState(adminTitleState);

  const utils = trpc.useContext();

  const [newProductDialogOpen, setNewProductDialogOpen] =
    useState<boolean>(false);

  const [formData, setFormData] = useState<Product>(EMPTY_FORM_DATA);
  const [editProduct, setEditProduct] = useState<string | null>(null);

  const [editProductDialog, setEditProductDialog] = useState<Product | null>(
    null
  );

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);

  const { data: products, isLoading } = trpc.products.getProducts.useQuery();

  const { mutate: updateProduct, data } =
    trpc.products.updateProduct.useMutation({
      onSuccess: (data) => {
        utils.products.invalidate();
      },
    });

  const { mutate: deleteProduct } = trpc.products.deleteProduct.useMutation({
    onSuccess: () => {
      utils.products.invalidate();
    },
  });

  useEffect(() => {
    setTitle("Produkty");
  }, [setTitle]);

  return (
    <>
      {editProductDialog && (
        <EditProductDialog
          open={!!editProductDialog}
          product={editProductDialog}
          onClose={() => setEditProductDialog(null)}
        />
      )}
      <NewProductDialog
        open={newProductDialogOpen}
        onClose={() => setNewProductDialogOpen(false)}
      />
      <div>
        <Button
          className="flex flex-row gap-2"
          onClick={() => setNewProductDialogOpen(true)}
        >
          <Plus />
          Přídat produkt
        </Button>
        <Table>
          {isLoading ? (
            <TableRow>
              <Loader2 className="animate-spin" />
            </TableRow>
          ) : (
            <>
              <TableHeader>
                <TableRow>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>Obrazek</TableCell>
                  <TableCell>Produkt</TableCell>
                  <TableCell>Popis</TableCell>
                  <TableCell>Cena</TableCell>
                  <TableCell>Sklad</TableCell>
                  <TableCell>BestSeller</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products?.map((p) => (
                  <TableRow
                    key={p.id}
                    onDoubleClick={() => {
                      setEditProduct(p.id);
                      setFormData(p);
                    }}
                  >
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      {editProduct === p.id ? (
                        <Uploader
                          isUploading={isUploading}
                          setImages={setImages}
                          images={images}
                          setIsUploading={setIsUploading}
                        />
                      ) : (
                        <CldImage
                          src={p.img.split(", ")[0]}
                          alt={p.name}
                          height={50}
                          width={50}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      {editProduct === p.id ? (
                        <Input
                          value={formData.name}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }));
                          }}
                        />
                      ) : (
                        p.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editProduct === p.id ? (
                        <Textarea
                          className="w-full"
                          value={formData.desc}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              desc: e.target.value,
                            }));
                          }}
                        />
                      ) : (
                        p.desc
                      )}
                    </TableCell>
                    <TableCell>
                      {editProduct === p.id ? (
                        <Input
                          type="number"
                          className="w-20"
                          value={formData.price}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              price: Number(e.target.value),
                            }));
                          }}
                        />
                      ) : (
                        p.price
                      )}
                    </TableCell>
                    <TableCell>
                      {editProduct === p.id ? (
                        <Input
                          type="number"
                          className="w-20"
                          value={formData.stock}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              stock: Number(e.target.value),
                            }));
                          }}
                        />
                      ) : (
                        p.stock
                      )}
                    </TableCell>
                    <TableCell>
                      {editProduct === p.id ? (
                        <Checkbox
                          checked={formData.featured}
                          onCheckedChange={(e: boolean) => {
                            setFormData((prev) => ({
                              ...prev,
                              featured: e,
                            }));
                          }}
                        />
                      ) : p.featured ? (
                        "Ano"
                      ) : (
                        "Ne"
                      )}
                    </TableCell>
                    <TableCell>
                      {editProduct === p.id ? (
                        <>
                          <X onClick={() => setEditProduct(null)} />
                          <Save
                            onClick={() => {
                              updateProduct({
                                ...formData,
                                id: p.id,
                                img:
                                  images.length > 0
                                    ? images.join(", ")
                                    : undefined,
                              });
                              setEditProduct(null);
                            }}
                          />
                        </>
                      ) : (
                        <div className="flex flex-row items-center justify-center gap-2">
                          <Button
                            className="aspect-square px-0 py-0 bg-secondary hover:bg-primary/10"
                            variant={"icon"}
                            onClick={() => {
                              setEditProduct(p.id);
                              setFormData({ ...p });
                            }}
                          >
                            <Edit2 className="text-blue-500" size={"1.3rem"} />
                          </Button>
                          <Button
                            className="aspect-square px-0 py-0 bg-secondary hover:bg-primary/10"
                            variant={"icon"}
                            onClick={() => {
                              setEditProductDialog(p);
                              setFormData({ ...p });
                            }}
                          >
                            <FileEdit
                              className="text-blue-500"
                              size={"1.3rem"}
                            />
                          </Button>
                          <Button
                            className="aspect-square px-0 py-0 bg-secondary hover:bg-primary/10"
                            variant={"icon"}
                            onClick={() => deleteProduct(p.id)}
                          >
                            <Trash className=" text-red-500" size={"1.3rem"} />
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </div>
    </>
  );
};

export default ProductsPage;
