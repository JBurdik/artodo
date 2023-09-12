import { prisma } from "@/lib/prisma";
import { privateProcedure, publicProcedure, router } from "../trpc";
import { z } from "zod";
export const productsRouter = router({
  getProducts: publicProcedure.query(async () => {
    return prisma.product.findMany()
  }),

  updateProduct: publicProcedure.input(z.object({
    id: z.string(),
    name: z.string().optional(),
    desc: z.string().optional(),
    price: z.number().optional(),
    featured: z.boolean().optional(),
  })).mutation(async ({input}) => {

    const result = await prisma.product.update({where: {id: input.id}, data: {...input}})

    return result

  }),

  createProduct: privateProcedure.input(z.object({
    name: z.string(),
    desc: z.string(),
    price: z.number(),
    stock: z.number(),
    featured: z.boolean().optional()
  })).mutation(async ({input})=>{
    const result = await prisma.product.create({data: {...input, img: ''}})
    return result
  })
});
