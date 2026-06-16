import express from "express"
import register from "../controllers/authController.js"

const router = express.Router();
router.get("/", (req, res) => {
    // res.sendStatus(201);
    res.send(`You got to the get verb - ${req.method} of /auth/. Nice!`)
    console.log("get for / ran!")
})
router.post("/register", register);

export default router;