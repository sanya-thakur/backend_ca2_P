const express=require("express");
const router=express.Router();

router.post("/users", async(req, res)=>{
    try {
        const {name, email, phone} = req.body; 
    if (!name || !email || !phone){
        return res.send(400).json({message: "All fields are required"})
    }
    return res.send(200).json({message: "User created successfully"})
} catch(err){
    return res.status(500).json({message: "Internal server error"})
}
});

router.get("/users", async(req,res)=>{
    try {
        return res.status(200).json({message: "All users fetched"})
    } catch(err){
        return res.status(500).json({message: "Internal server error"})
    }
});

module.exports=router;