import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/connect.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
dotenv.config();

const app = express(); // Create express app
const port = process.env.PORT || 5001;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`server is listening on port is of ${port}`));

    }catch(err){
        console.log(err);
    }
}

start();
