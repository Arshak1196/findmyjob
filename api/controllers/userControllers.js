import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { createError } from '../middlewares/error.js'


//@route   POST /register
//@access  Public
//@desc    Authenticate a user
export const userRegister = async (req, res, next) => {
    try {
        //Check if user exists
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            return next(createError(400, "User already exists"));
        }

        //Hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //Create user
        const newUser = new User({
            ...req.body,
            password: hash,
        });
        await newUser.save();
        if (newUser) {
            res.status(201).json({
                loggedin: true,
                _id: newUser._id, name: newUser.name, email: newUser.email, mobile: newUser.mobile,
                savedJobs: newUser.savedJobs, token: generateToken(newUser._id)
            })
        } else {
            return next(createError(400, "Invalid User data"));
        }
    } catch (error) {
        next(error)
    }
}

//@route   POST /register
//@access  Public
//@desc    User login
export const userLogin = async (req, res, next) => {
    const { email, password } = req.body
    //Check for user by email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            loggedin: true,
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            savedJobs: user.savedJobs,
            token: generateToken(user._id)
        })
    } else {
        return next(createError(400, 'Invalid credentials'))
    }
}

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECTET_KEY, {
        expiresIn: '30d'
    })
}