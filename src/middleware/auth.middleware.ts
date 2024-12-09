import { SESSION_PREFIX } from '../modules/auth/auth.service';
import RedisSingleton from '../config/redis';
import { extractXToken, verifyToken } from '../utils/jwt';
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractXToken(req)
    const decoded = verifyToken(token);

    const redisClient = RedisSingleton.getInstance();
    // @ts-ignore
    const existToken = await redisClient.get(`${SESSION_PREFIX}${decoded.id}`);
    // @ts-ignore
    if (!existToken || JSON.parse(existToken).token !== token) {
      throw new Error('Invalid token');
    }
    // @ts-ignore
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
