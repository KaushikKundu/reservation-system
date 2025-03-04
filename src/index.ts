import express,{Request,Response, Router} from "express"
const app = express();
const port = 3000;

import userRouter from "./controllers/userRoutes";
import bookingRouter from "./controllers/bookingRoutes";
import movieRouter from "./controllers/movieRoutes";

app.use('/api/v1/users',userRouter)
app.use('/api/v1/movie',movieRouter)
app.use('/api/v1/booking',bookingRouter)

app.listen(port,()=> {
    console.log("listening on port 3000");
})