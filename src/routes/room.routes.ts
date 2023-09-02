import express, { Request, Response } from 'express';

export const roomRoutes = express.Router();

roomRoutes.get("/", (req: Request, res: Response) => {
    res.send("Hello from Room Route")
})

roomRoutes.use("*", (req: Request, res: Response) => {
    res.send("Reached Room Routes")
})
