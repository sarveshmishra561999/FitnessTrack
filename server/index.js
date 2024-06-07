require("dotenv/config");
const express=require("express");
const errorMiddleware = require("./middleware/error-middleware");
const cors=require("cors")
const connectDB = require("./utils/db");
const HomeRoute=require("./routes/home")
const UserRoutes=require("./routes/User.js")

const app=express();
app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true}))
app.use("/api/user/",UserRoutes)
app.use("/",HomeRoute)
app.use(errorMiddleware)

const PORT=process.env.PORT
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port:${PORT}`)
    })
})
