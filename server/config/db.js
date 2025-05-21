import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const database = async () => {
    try{
        const connectDb = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB is Connected.... ${connectDb.connection.host}`);
    }
    catch(err){
        console.log(`Error occurred in connection ${err.message}`);
        process.exit(1)
    }
}

export default database