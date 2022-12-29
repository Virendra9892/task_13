
const taskServices = require("../services/taskServices");

exports.registerTask = async(req,res,next)=>{
    try{
        let body = req.body;
        let result = await taskServices.registerTask({
            taskName:body.taskName,
            taskType:body.taskType
        });
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.result});
        }
    }
    catch(error){
        next(error)
    }
}

exports.getAllTask = async(req,res,next)=>{
    try{
       let result = await taskServices.getAllTask();
       if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.result});
       }
    }
    catch(error){
        next(error)
    }
}