import { AsyncHeadler } from "../utils/AsyncHeader.js";


const  registorUser = AsyncHeadler(async(req,res,next)=>{
    res.status(200).json({
        massage:"ok"
    })
}) 

export {registorUser}