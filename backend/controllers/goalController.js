//access:private
//MVC structure
// Language: javascript
// Path: backend\controllers\goalController.js
const asyncHander=require("express-async-handler")
const getGoals=asyncHander(async(req,res)=>{
    res.status(200).json({message:"Get Goals"})

})
const setGoals=asyncHander(async(req,res)=>{
    if(!req.body.text)
{    res.status(400)
         throw new Error("text is required")
    //res.status(400).json({message:"Text is required"})
}    res.status(200).json(req.body)
})
const updateGoals=asyncHander(async(req,res)=>{
    res.status(200).json({message:"Update Goal "+req.params.id})
})
const deleteGoals=asyncHander(async(req,res)=>{
    res.status(200).json({message:`Delete Goals ${req.params.id}`})
})
module.exports={getGoals,setGoals,updateGoals,deleteGoals}