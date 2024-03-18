import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

import adminRoutes from "./routes/admins.js"
import authRoutes from "./routes/auth.js"
import eventRoutes from "./routes/events.js"
import studentsRoutes from "./routes/students.js"


//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())

app.use("/api/admins", adminRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/students", studentsRoutes)

app.listen(8800, () => {
    console.log("Running!!!!")
})