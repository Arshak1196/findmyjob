import express from 'express';
const router = express.Router();
import { userLogin, userRegister } from '../controllers/userControllers.js';


//test
router.get('/test', (req, res) => {
    res.json({ message: 'test completed' })
})

//userRegister
router.post('/register', userRegister)

//userLogin
router.post('/login', userLogin)



export default router