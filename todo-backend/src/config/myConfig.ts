import { config } from "dotenv";


config();


//MONGODB DETAILS 
const MONGO_USERNAME = "";
const MONGO_PASSWORD = "";
const MONGO_DATABASE = "";
const MONGO_STIRNG = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/ToDo";


const MONGO = {
    username : MONGO_USERNAME,
    password : MONGO_PASSWORD,
    database : MONGO_DATABASE,
    string : MONGO_STIRNG
}

//SERVER DETAILS 
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.PORT || 2222;
const JWT_SECRET = process.env.JWT_SECRET || "DFDF73DFH83NR88NERNB38R83RB8R@KK2#kjH$kj%5$hjh#kj#jjk#h"


const SERVER = {
    hostname : SERVER_HOSTNAME,
    port : SERVER_PORT,

}

const KEY = {
    jwt_secret : JWT_SECRET
}



const myConfig = {
    mogo:MONGO,
    server: SERVER,
    key:KEY
}


export { myConfig };




























