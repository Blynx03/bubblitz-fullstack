import express from "express";
import authRoutes from "./routes/authRoutes.js"
import scoreRoutes from "./routes/scoreRoutes.js"
import { config } from "dotenv"
import { connectDB, disconnectDB } from "./config/db.js"
import cors from "cors";


config();
connectDB();

const app = express();
const PORT = 5001;

app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/score", scoreRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});


// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => { 
	console.error("Unhandled Rejection:", err);
	server.close(async () => {
		await disconnectDB();
		process.exit(1);
	});
});
	
// Handle uncaught exceptions
process.on("uncaughtException", async(err) => {
    console.error("Uncaught Exception: ", err);
    await disconnectDB();
    process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});