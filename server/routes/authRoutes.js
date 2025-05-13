import express from 'express'
import { login, logout, register, loaduser } from '../controllers/authController.js'

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/me', loaduser)

export default router