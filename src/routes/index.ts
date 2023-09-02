import express from 'express';
import { roomRoutes } from './room.routes';
import { userRoutes } from './user.routes';
export const routes = express.Router();

routes.use("/user", userRoutes);
routes.use("/room", roomRoutes);