const Task = require("../Models/TodoModel");

module.exports.AddTask = async (req, res) => {
  try {
    const { task } = req.body;
    const response = await new Task({ task: task });
    await response.save()
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports.GetTask = async (req, res) => {
  try {
    const response = await Task.find({});
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports.EditDone=async(req,res)=>{
    try{
        const {id}=req.params
        const response=await Task.findOneAndUpdate({_id:id},{done:true})
        return res.json(response)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
module.exports.EditDoneFalse=async(req,res)=>{
  try{
    const {id}=req.params
    const response=await Task.findOneAndUpdate({_id:id},{done:false})
    return res.json(response)
  }catch(error){
    return res.status(500).json({error:error.message})
  }
}
module.exports.Delete=async(req,res)=>{
    try{
        const {id}=req.params
        const response=await Task.findByIdAndDelete({_id:id})
        return res.json(response)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
module.exports.GetSingleTask=async(req,res)=>{
    try{
        const {id}=req.params
        const response=await Task.findById({_id:id})
        return res.json(response)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
module.exports.EditTask=async(req,res)=>{
  try{
    const {id}=req.params
    const {task}=req.body
    const response=await Task.findOneAndUpdate({_id:id},{task:task})
    return res.json(response)
  }catch(error){
    return res.status(500).json({error:error.message})
  }
}
