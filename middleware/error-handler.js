const {StatusCodes} = require('http-status-codes')
const errorHandlerMiddleware=(err,req,res,next)=>{
    let customError={
        StatusCode:err.StatusCodes||StatusCodes.INTERNAL_SERVER_ERROR,
        msg:err.message || "Something went wrong please try again"
    }

   if(err.name==="ValidationError") {
       customError.msg= Object.values(err.errors)
    .map((item)=>item.message).join(",")
    customError.StatusCode=400
}
if(err.code && err.code ===11000){
    customError.msg = `Duplicate value entered for${Object.keys(
        err.keyValue
      )} field, please choose another value`;
      customError.msg = `No item found with id : `
}
return res.status(customError.StatusCode).json({ msg: customError.msg });
}
module.exports=errorHandlerMiddleware