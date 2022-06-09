const {StatusCodes}= require('http-status-codes')

const CustomAPIError = require('./custom-api')

class BadRequestError extends CustomAPIError{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.BAD_GATEWAY
    }
}

module.exports=BadRequestError