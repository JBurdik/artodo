import * as z from "zod"

export const productSchema = z.object({
  id: z.string(),
  img: z.string(),
  name: z.string(),
  desc: z.string(),
  price: z.number().int(),
  stock: z.number().int(),
  featured: z.boolean(),
})
