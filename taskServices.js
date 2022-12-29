const db = require("../models/index");
const task = db.task;
const user = db.user;


exports.registerTask = async(data)=>{
    let exist = await task.findOne({where:{taskName:data.taskName}});
    if(exist){
        return ({status:403,sucess:false,message:"task already exist"});
    }
    let result = await task.create({
        taskName:data.taskName,
        taskType:data.taskType
    })
    // const userRow = await user.findByPk(2);
    // result.addUser(userRow, { through: 'usertask' })
    if(result){
        return ({status:200,sucess:true,message:"task register sucessfully",result:result});
    }
}


exports.getAllTask = async()=>{
    let exist = await task.findAll({
        attributes:{ exclude:["createdAt","updatedAt"]},
        include:{
            model:user,
            attributes:["userName","email"]
        }
    }
    );
    if(!exist){
        return ({status:404,sucess:false,message:"task doesn't exist"});
    }

    if(exist){
        return ({status:200,sucess:true,message:"task found sucessfully.",result:exist})
    }
}