import express from 'express'
import { adPage } from '../controllers/adController.js'

const router = express.Router()

router.get('/advertisement', adPage)

export default router