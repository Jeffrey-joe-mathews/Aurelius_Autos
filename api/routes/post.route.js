import express from 'express'
const router = express.Router()

router.get("test", (req, res) => {
    res.send("Hello World")
    console.log("Router works ig!!!!")
})

export default router;