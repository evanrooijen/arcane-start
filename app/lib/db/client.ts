import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const getPrismaClient = () => {
  return new PrismaClient().$extends(withAccelerate());
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof getPrismaClient>;
};

export const prisma =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  globalForPrisma.prisma || getPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
