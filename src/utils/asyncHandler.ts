



const asyncHandler= (requestHandler:any)=>{
    (req:any,res:any,next:any)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}


export {asyncHandler}


// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (err) {
//         req.status(err.code || 500).json({
//             success:true,
//             message:err.message
//         })
//     }
// }

