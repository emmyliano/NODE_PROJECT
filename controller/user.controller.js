const UserService = require("../services/user.services");


exports.register = async(req,res,next)=>{
    try {
        const {email,password} = req.body;

        // console.log(UserService);
        const successRes = await UserService.registerUser(email,password);

        res.json({status:true,success:"User Registered Successfully"});
    } catch (error) {
        throw error
    }
}