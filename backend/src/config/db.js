import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]});

// Connecting to the database
const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Db connected via Prisma');
    } catch (error) {
        console.log(`Database connection error: ${error.message}`);
        process.exit(1);
    }
}

// Disconnecting to the database
const disconnectDB = async () => {
    await prisma.$disconnect();
}

export { prisma, connectDB, disconnectDB };

