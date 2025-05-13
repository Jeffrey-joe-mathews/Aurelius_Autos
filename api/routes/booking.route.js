import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { createBooking, getBooking } from '../controllers/booking.controller.js'


const bookingRoutes = express.Router()

bookingRoutes.post("/", verifyToken, createBooking)
bookingRoutes.get("/:id", verifyToken, getBooking)

export default bookingRoutes;