import express, { Application } from 'express';
import cors from 'cors';
import { myConfig } from './config/myConfig';
import { ConnectDatabase } from './config/database';
import { router } from './routes/mainRoute';

const app:Application = express();


ConnectDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Declaring Route
router(app);



app.listen(myConfig.server.port,() => {
    console.log(`Server is running on http://127.0.0.1:${myConfig.server.port}`)
})

























