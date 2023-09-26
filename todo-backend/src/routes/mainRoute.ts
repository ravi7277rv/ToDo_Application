import express, { Application } from 'express';
import { userRouter } from './todoRoute';


const router = (app:Application) => {


    app.use("/api/v1", [
        express.urlencoded({extended:false}),
        express.json({})],
        userRouter
        )
}


export {router};










































