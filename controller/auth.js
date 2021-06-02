const StudentLogin = require('../models/StudentLogin') ;
exports.Signup = async (req,res) => { 
    console.log(req.body);
    const newStudent = new StudentLogin(req.body) ; 
    const validateEmail = await StudentLogin.findOne({email : req.body.email}) ;
    const validateUser = await StudentLogin.findOne({username : req.body.username}) ;
    if((validateEmail && validateUser)|| (!validateEmail && validateUser) || (validateEmail && !validateUser)){
        return res.status(400).json({
            Error : 'already exist'
        })
    }
    await newStudent.save() ; 
    return res.status(200).json({
        msg : 'Saved Succsexfully'
    })
}

exports.Login = async (req,res) => {
    const validate = await StudentLogin.findOne({username : req.body.username}) ;
    if(validate){
        if(validate.password === req.body.password){
            return res.status(200).json({username :validate.username , email: validate.email})
        }
        else { 
            return res.status(401).json({
                error : 'password didnot match'
            })
        }
    } 
    return res.status(401).json({
        error :  'doesnot exist'
    })

}