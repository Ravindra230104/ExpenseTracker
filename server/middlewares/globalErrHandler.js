const globalErrHandler = (err,req,res,next)=>{
    // message
    // status
    // statuscode
    // stack

    const message = err.message;
    const status = err.status = err.status || 'error';
    const statuscode = err.statusCode = err.statusCode || 500;
    const stack = err.stack;

    res.status(statuscode).json({
        status,
        message,
        stack
    })
};

module.exports = globalErrHandler;

