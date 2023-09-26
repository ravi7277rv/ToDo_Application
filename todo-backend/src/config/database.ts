import mongoose from "mongoose";
import { myConfig } from "./myConfig";

const ConnectDatabase = () => {

    const  mongoURI:string = myConfig.mogo.string;

    if(!mongoURI){
        console.log(`MongoDB string is not set`)
    };


    mongoose.connect(mongoURI)
    .then((conn) => {
        console.log(`Database is connected ${conn.connection.host}`);
    }).catch((error) => {
        console.log(error);
    })
}

export {ConnectDatabase};












































