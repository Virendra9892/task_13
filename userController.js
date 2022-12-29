
const userService = require("../services/userServices");


exports.registerUser = async(req,res,next)=>{
    try{
       let body = req.body;
       let result = await userService.registerUser({
        userName:body.userName,
        email:body.email,
        password:body.password
       })
       if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.result})
       }
    }
    catch(error){
        next(error);
    }
}

exports.getAllUser = async(req,res,next)=>{
    try{
        let result = await userService.getAllUser();
        if(result){
            return res.status(result.status).send({message:result.message,sucess:result.sucess,result:result.result});
        }
    }
    catch(error){
        next(error);
    }
}