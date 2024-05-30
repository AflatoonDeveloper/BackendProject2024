
const asyncHeadler = (requestHeandler) =>{
(req,res,next)=>{
    Promise.resolve(requestHeandler(req,res,next)).catch((error)=>next (error))
}
}

export {asyncHeadler}






// const asyncHeader = (fn) = async (req,res,next) =>{
// try {
//     await fn(req,res,next)
    
// } catch (error) {
//     res.status(error.code || 500).json({
//         success: false,/
//         massage: error.massage
//     })
// }
// }

// const asyncHeading = (fn)= async(req,res,next)=>{

//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             massage:error.massage
//         })
//     }
// }