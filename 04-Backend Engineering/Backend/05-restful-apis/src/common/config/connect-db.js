import mongoose from "mongoose";

export const connectDB = async () => {
  // 1. DB connection might fail, there is no guarantee
  // 2. DB is always in another content 
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database connected successfully!..\n\n`)
    console.log("Inside connection : \n");
    console.log(conn.connection);

  } catch (error) {
    console.error("Error while connecting to the DB : ", error)
  }
}
