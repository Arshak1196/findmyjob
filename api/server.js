import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import cors from 'cors'
import colors from 'colors'
import bodyParser from "body-parser"
import fileUpload from 'express-fileupload'

const app = express()
dotenv.config()

const port = process.env.PORT || 8000

//routers
import userRouter from './routes/user.js'
import postRouter from './routes/posts.js'
import jobRouter from './routes/jobs.js'
import uploadRouter from './routes/upload.js'
import adminRouter from './routes/admin.js'


//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(fileUpload({
    useTempFiles : true,
}));

app.use('/', userRouter)
app.use('/post',postRouter)
app.use('/jobs', jobRouter)
app.use('/upload',uploadRouter)

app.use('/admin', adminRouter)

//errorHandling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
});

app.listen(port, () => {
    //mongoDB connection
    connectDB()
    console.log(colors.rainbow(`Server started on port ${port}`))
});


