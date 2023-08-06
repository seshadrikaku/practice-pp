

import mongoose from "mongoose";

import Express from "express";
import { postController } from "../UserController/Controller.js";

const route=Express.Router()


route.post("/",postController)

export default route











// import { Router } from "express";

// import {  deleteController, getController, postController } from "../UserController/Controller.js";

// const route=Router();


// route.post("/",postController)
// route.get('/user',getController)
// route.delete("/user/:id",deleteController)


// export default route