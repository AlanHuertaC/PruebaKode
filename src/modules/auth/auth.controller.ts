import { Request, Response } from 'express';
import { LoginDto } from './login.dto';
import { validationMiddleware } from '../../middleware/validation.middleware';
import { login, logout } from './auth.service';
import { authMiddleware } from '../../middleware/auth.middleware';

export const loginHandler = [
  validationMiddleware(LoginDto),
  async (req: Request, res: Response) => {
    const { identifier, password } = req.body as LoginDto;
    try {
      const loginResponse = await login(identifier, password);
      res.json({ ...loginResponse });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  },
];

export const logoutHandler = [
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      // @ts-ignore
      await logout(req.user.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
];


export const verifyHandler = [
  authMiddleware,
  (req: Request, res: Response) => {
    res.json({ message: 'Verified' });
  }
]
