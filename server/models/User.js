const mongoose=require("mongoose");
const bcrypt = require("bcrypt")
//const jwt = require("jsonwebtoken");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    img:{
        type:String,
        default:null,
    },
    password:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
    }
},{
    timestamps:true
}
)
UserSchema.pre("save", async function (next){
    const user = this;
    if (!user.isModified("password")) {
        next()
    }
    try {
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
})
UserSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}
const User=new mongoose.model("User",UserSchema)
module.exports=User