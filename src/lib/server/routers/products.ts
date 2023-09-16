import { prisma } from "@/lib/prisma";
import { privateProcedure, publicProcedure, router } from "../trpc";
import { z } from "zod";
export const productsRouter = router({
  getProducts: publicProcedure.query(async () => {
    return prisma.product.findMany()
  }),

  getProductBySlug: publicProcedure.input(z.string()).query(async ({input})=>{
    return prisma.product.findFirst({
      where: {
        slug: input
      }
    })
  }),

  updateProduct: publicProcedure.input(z.object({
    id: z.string(),
    name: z.string().optional(),
    desc: z.string().optional(),
    img: z.string().optional(),
    price: z.number().optional(),
    stock: z.number().optional(),
    featured: z.boolean().optional(),
  })).mutation(async ({input}) => {

    const result = await prisma.product.update({where: {id: input.id}, data: {...input}})

    return result

  }),

  createProduct: publicProcedure.input(z.object({
    name: z.string(),
    desc: z.string(),
    img: z.string().optional(),
    price: z.number(),
    stock: z.number(),
    featured: z.boolean().optional()
  })).mutation(async ({input})=>{
    const result = await prisma.product.create({data: {...input, img: input.img ?? ''}})
    return result
  }),

  deleteProduct: publicProcedure.input(z.string()).mutation(async( { input }) => {
      const result = await prisma.product.delete({where: {id: input}})
      return result
  })
});
