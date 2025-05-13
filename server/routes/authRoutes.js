import express from 'express'
import { login, logout, register, loadUser } from '../controllers/authController.js'

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/me', loadUser)

export default router