


import userModel from "../model/userModel.js";


export const postController=async (req,res)=>{
let student;
const {name,passowrd,email}=req.body
console.log(student)
student= await userModel.find({email})
if(!student){
  try {
     return res.status(400).send({
        message:"user is alredy there"
     })
  } catch (error) {
    console.log(error)
  }
}
 
const newUser = userModel({
    name:name,
    passowrd:passowrd,
    email:email
})

try {
    await newUser.save()
} catch (error) {
    console.log(error)
}

res.status(200).send({
    message:"new user added"
})

}









// export const postController = async (req,res) =>{
//     console.log(req.body)
//     const { name, email, password}=req.body
//     let student;
//     try {
//         student = await userModel.findOne({email})
//     } catch (error) {
//        console.log(error) 
//     }
//     if(student){
//         return res.status(200).json({
//             message:"user is alredy exist"
//         })
//     }
//     const newUser = new userModel({
//         name:name,
//         email:email,
//         password:password
//     })
//     try {
//       await newUser.save()  
//     } catch (error) {
//      console.log(error)   
//     }

//     res.status(200).json({
//         message:"user is created"
//     })
// }

// export const getController = async (req,res) => {
//     let student;
//     try {
//        student = await userModel.find()
//     } catch (error) {
//      console.log(error)   
//     }
//     if(!student){
//         return res.status(400).json({
//             message:"user is not found"
//         })
//     }
//     res.status(200).json(student)
// }


// export const deleteController = async (req,res) => {
//     const id=req.params.id;
//     let userId
//     try {
//       userId = await userModel.findByIdAndDelete({_id:id})  
//     } catch (error) {
//       console.log(error)  
//     }
//     if(!userId){
//         return res.status(400).json({
//             message:"user is not found"
//         })
//     }
//     res.status(200).json({
//         message:"user is deleted succesfully"
//     })
// }

// export const updateController = async (req,res) =>{
//     let student;
//     const id=req.params.id;
//     try {
//        student= await userModel.findByIdAndUpdate({_id:id}) 
//     } catch (error) {
//       console.log(error)  
//     }
    
// }