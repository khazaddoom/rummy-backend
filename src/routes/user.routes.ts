import express, { Request, Response } from 'express';

export const userRoutes = express.Router();

userRoutes.get("/login", (req: Request, res: Response) => {
    res.send("Hello from user Routes")
})

userRoutes.use("*", (req: Request, res: Response) => {
    res.send("Reached User Routes")
})
