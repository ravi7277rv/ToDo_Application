import { ToDo } from "../modules/todoModules";
import { SC } from "../@types/enum";
import { Request, Response } from "express";


const ToDoControllers = {


    //Creating the todo
    creatingTodo:async ( req: Request, res: Response) => {
        try {

            //getting the data from the body
            const { caption, description } = req.body;

            if(!caption || !description){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"One or more field is empty",
                            data:null,
                        });
            };


            const data = new ToDo();
            data.caption = caption;
            data.description = description;

            await data.save();


            return res
                    .status(SC.OK)
                    .json({
                        success:false,
                        message:"Todo List is created",
                        data:data,
                    })


            
        } catch (error:any) {
            return res
                    .status(SC.INTERNAL_SERVER_ERROR)
                    .json({
                        success:false,
                        message:error.message,
                        data:null,
                    });
        };
    },



    //fetching Todo list
    fetchAllTodoList:async( req: Request, res: Response) => {
        try {

            const todoLists = await ToDo.find();
            
            if(!todoLists){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"No any todo list present",
                            data:null,
                        });
            };


            return res
                    .status(SC.OK)
                    .json({
                        success:true,
                        message:"All todo lists",
                        data:todoLists,
                    })
            
        } catch (error:any) {
            return res
                    .status(SC.INTERNAL_SERVER_ERROR)
                    .json({
                        success:false,
                        message:error.message,
                        data:null,
                    })
        }
    },


    //Edit the todo 
    updateTodoList: async ( req: Request, res: Response ) => {
        try {

            const { id } = req.params;
            const { caption, description } = req.body;
            
            console.log(caption,description);
            if(!id){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"Id is not recived",
                            data:null,
                        });
            };

            if(!caption || !description ){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"Caption, description and completed is required",
                            data:null,
                        });
            };


            const todoData = await ToDo.findById(id);

           if(!todoData){
            return res
                    .status(SC.BAD_REQUEST)
                    .json({
                        success:false,
                        message:"No todo data is found with Id",
                        data:null,
                    });
           };

           todoData.caption = caption;
           todoData.description = description;

           await todoData.save();


           return res
                    .status(SC.OK)
                    .json({
                        success:false,
                        message:"Todo is updated successfylly",
                        data:todoData,
                    })

            
        } catch (error:any) {
            return res
                    .status(SC.INTERNAL_SERVER_ERROR)
                    .json({
                        success:false,
                        message:error.message,
                        data:null,
                    });
        };
    },


    //updating completed or not todo task

    updateCompleted: async ( req: Request, res: Response ) => {

        try {

            const { id } = req.params;
            const { completed } = req.body;

            console.log(completed)
            if(!id){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"Id did not recived",
                            data:null,
                        });
            };

            if(completed === null){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"Completed is not recived",
                            data:null,
                        });
            };

            const data = await ToDo.findById(id);

            if(!data){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"No Todo founds",
                            data:null,
                        });
            };

            data.completed = completed;

            await data.save();

            return res
                    .status(SC.OK)
                    .json({
                        success:true,
                        message:"Task completed successfully",
                        data:data,
                    })

            
        } catch (error:any) {
            return res
                    .status(SC.INTERNAL_SERVER_ERROR)
                    .json({
                        success:false,
                        message:error.message,
                        data:null,
                    })
        }

    },

    //deleting the todo data
    deleteTodo: async ( req: Request, res: Response ) => {
        try {

            const { id } = req.params;
            console.log(id)
            if(!id){
                return res
                        .status(SC.BAD_REQUEST)
                        .json({
                            success:false,
                            message:"Id did not recived",
                            data:null,
                        });
            };

            const todoData = await ToDo.findByIdAndDelete(id);

            return res
                    .status(SC.OK)
                    .json({
                        success:true,
                        message:"Todo is deleted successfully",
                        data:todoData,
                    })
            
        } catch (error:any) {
            return res
                    .status(SC.INTERNAL_SERVER_ERROR)
                    .json({
                        success:false,
                        message:error.message,
                        data:null,
                    })
        }
    }

};


export { ToDoControllers };
























