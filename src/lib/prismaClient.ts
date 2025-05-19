import { PrismaClient } from "@prisma/client"

declare global {
    // eslint-disable-next-line no-var, vars-on-top
    var prisma: PrismaClient | undefined
}
    
export const prismaClient = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
    // This is the new way to use Prisma Client in Next.js
    // It prevents the client from being instantiated multiple times
    // and ensures that the client is only instantiated once in development mode
    globalThis.prisma = PrismaClient
}
