import schema from "./user.models.js"
export function addTask(req,res)
{
    const {task}=req.body
    schema.create({task})
    res.end();
  
 
}
export async function getTask(req,res){
    let task=await schema.find()
    res.status(200).send(task)
}