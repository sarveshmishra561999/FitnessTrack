const mongoose = require('mongoose');
require('dotenv/config');

const connectDB=async()=>{
try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.CONNECTION_DB_STRING)
    console.log("connection successfull to db")

} catch (error) {
    console.error("DB connection faild")
    process.exit(0)
}
}
module.exports=connectDB;
