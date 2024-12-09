import express from "express";
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/user/user.routes';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// app.get("/", (request: Request, response: Response) => {
//     response.status(200).send("Hello World!!");
// });

export default app;
