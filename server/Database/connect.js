import mongoose from "mongoose"

async function connect(){
   await mongoose.connect(process.env.MongoDB_URL)  
}

export default connect;








// import mongoose from "mongoose";

// async function connect(){
//     await mongoose.connect(process.env.MongoDB_URL)
// }
// export default connect;

// // const connectDB= async (DATABASE_URL)=>{
// //     try {
// //         const DB_OPTIONS={
// //             dbName:"Auth"
// //         }
// //         await mongoose.connect("",DB_OPTIONS)
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }
// // export default connectDB;