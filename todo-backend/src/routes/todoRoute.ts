import express, { Router } from 'express';
import { ToDoControllers } from '../controllers/todoController';


const userRouter:Router = express.Router();


userRouter.route("/createTodo").post(ToDoControllers.creatingTodo);
userRouter.route("/fetchTodoList").get(ToDoControllers.fetchAllTodoList);
userRouter.route("/updateTodoList/:id").put(ToDoControllers.updateTodoList);
userRouter.route("/deleteTodoList/:id").delete(ToDoControllers.deleteTodo)



export {userRouter};

























