import express from "express";
import productRoutes from "./routes/product.routes.js"
import authRoutes from "./routes/auth.routes.js"
import orderRoutes from "./routes/order.routes.js"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/v1", productRoutes)
app.use("/api/v1", orderRoutes)

export default app;