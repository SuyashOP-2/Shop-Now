import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    

} 
export default connectDB;