import express from "express";
import bodyParser from "body-parser";
// import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import AuthRoute from './routes/AuthRoute.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'

const app = express();

// MiddleWare
app.use(bodyParser.json({limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
.connect(process.env.MONGO_DB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT, ()=> console.log(`Listening at ${process.env.PORT}`)))
.catch((error) => console.log(error));


// Usage of routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
// app.use('/upload', UploadRoute)
// app.use('/chat', ChatRoute)
// app.use('/message', MessageRoute)