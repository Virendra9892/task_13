const db = require("../models/index");
const task = db.task;
const user = db.user;

exports.registerUser = async(data)=>{
    let exist = await user.findOne({where:{email:data.email}});
    if(exist){
        return ({status:403,sucess:false,message:"User Already Exist."});
    }
    let result = await user.create({
        userName:data.userName,
        email:data.email,
        password:data.password
    })
    if(result){
        return ({status:200,sucess:true,message:"User Register Sucessfully",result:result})
    }
}

exports.getAllUser = async()=>{
    let exist = await user.findAll({
        attributes:{exclude:["isAdmin","createdAt","updatedAt"]},
        include:{
            model:task,
            attributes:["taskName","taskType"]
        }
    });
    if(!exist){
        return ({status:404,sucess:false,message:"User doesn't exist"})
    }
    if(exist){
        return ({status:200,sucess:true,message:"User found sucess sucessfully",result:exist});
    }
}
