
import mongoose from "mongoose";

const NewSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },

})

export default mongoose.model("Student",NewSchema)













// import mongoose from "mongoose";

// const NewSchema=mongoose.Schema({
//     name:{
//         type:String,
//         require:true,
//     },
//     email:{
//         type:String,
//         require:true,
//     },
//     password:{
//         type:String,
//         require:true,
//     },
// })

// export default mongoose.model("student",NewSchema)