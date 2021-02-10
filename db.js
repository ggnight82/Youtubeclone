 /* 
    TODO 
    1. Database 관련작업
    2. 영상 업로드 시청 feature 작업
    3. Front-end

 */

 import mongoose from "mongoose";
 import dotenv from "dotenv";

 dotenv.config();

 mongoose.connect(
    process.env.MONGO_URL, 
    {   
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log(`Error on DB Connection: ${error}`);


db.once("open",handleOpen);
db.on("error", handleError); 