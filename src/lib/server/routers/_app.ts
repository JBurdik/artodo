import { productsRouter } from "./products";
import { router } from "../trpc";

export const appRouter = router({
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
