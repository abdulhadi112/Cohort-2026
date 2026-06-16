import dotenv from "dotenv"
import app from "./src/app.js"
import { connectDB } from "./src/common/config/connect-db.js"
dotenv.config()

const PORT = process.env.PORT || 5000

const start = async () => {
  // TODO : connect to DB
  await connectDB()



  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
}
start().catch((err) => {
  console.error("Failed to start the server : ", err)
  process.exit(1)
})