import * as z from "zod"

export const referencesSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  reference: z.string(),
})
