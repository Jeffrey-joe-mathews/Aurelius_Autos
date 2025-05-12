import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { createBooking } from '../controllers/booking.controller.js'


const bookingRoutes = express.Router()

bookingRoutes.post("/", verifyToken, createBooking)

export default bookingRoutes;