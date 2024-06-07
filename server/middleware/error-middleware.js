const errorMiddleware=(err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || "backend error"
    return res.status(status).json({
        success:false,
        status,
        message,
    })
}
module.exports=errorMiddleware;