import User from '../models/userModels.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Jwt
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES})
}

// Register
export const register = async (req, res) => {
    const { username, email, password } = req.body
    try{
        const existingUser = await User.findOne({email})
        if(existingUser) {return res.status(400).json({msg: 'User email already exist!'})}
            
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({ username, email, password: hashPassword })

        /* Immediate login after register. That's why this line removed
        const token = createToken(user._id)
        res.cookie('token', token, {httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000})
        */
        await user.save()
        res.status(201).json({msg: 'User registered successfully!!!', userId: user._id})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

// Login
export const login = async (req, res) => {
    const { email, password } = req.body
    try{
        const user = await User.findOne({email})
        if(!user) {return res.status(400).json({msg: 'User not founded!!'})}
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {return res.status(400).json({msg: 'Invalid credentials'})}

        const token = createToken(user._id)
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            samSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000})
        res.status(201).json({msg: 'Login successfully!!!!', user: { id: user._id, username: user.username, email: user.email } })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

// Loaduser
export const loadUser = async (req, res) => {
    try{
        const token = req.cookies.token;
        if(!token) return res.status(401).json({msg: 'Not authenticated'})

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id).select('-password')

        if(!user) return res.status(404).json({msg: 'User not founded'})

        res.status(200).json({user})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}


// Logout
export const logout = (req, res) => {
    res.cookie('token', '', {maxAge: 1})
    res.status(200).json({msg: 'Logged out'})
}
