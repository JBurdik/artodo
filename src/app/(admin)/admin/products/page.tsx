"use client";
import { adminTitleState } from "@/atoms/adminTitle";
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
import { Edit2, Loader2, Plus, Save, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

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
  const { data: products, isLoading } = trpc.products.getProducts.useQuery();
  const router = useRouter();
  const { mutate: updateProduct, data } =
    trpc.products.updateProduct.useMutation({
      onSuccess: (data) => {
        utils.products.invalidate();
      },
    });
  const [editProduct, setEditProduct] = useState<string | null>(null);
  useEffect(() => {
    setTitle("Produkty");
  }, [setTitle]);

  return (
    <>
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
                      <Image
                        src={p.img === "" ? "https://placehold.co/500" : p.img}
                        alt={p.name}
                        height={50}
                        width={50}
                      />
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
                              updateProduct({ ...formData, id: p.id });
                              setEditProduct(null);
                            }}
                          />
                        </>
                      ) : (
                        <Edit2
                          onClick={() => {
                            setEditProduct(p.id);
                            setFormData({ ...p });
                          }}
                          size={"1rem"}
                        />
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
