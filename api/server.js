import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import cors from 'cors'

const app = express()
dotenv.config()

const port = process.env.PORT || 8000

//routers
import userRouter from './routes/user.js'
import adminRouter from './routes/admin.js'

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', userRouter)
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
    console.log(`Server started on port ${port}`)
});


const array=[1,2,3,4,5]
const largest = array.reduce ((accumulator, currentValue) => {
    return (accumulator > currentValue ? accumulator : currentValue);
  })
console.log(largest)