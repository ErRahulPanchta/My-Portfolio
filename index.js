
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";
import connectDb from "./config/db.js";
import userMessageRoutes from "./routes/user.route.js";

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
);

app.use("/api", userMessageRoutes);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({ message: "Hi There " + PORT });
});

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on", PORT);
    });
});
