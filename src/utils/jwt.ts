import jwt from 'jsonwebtoken';
import { Request } from "express";
import { UnauthorizedException } from '../exceptions/unauthorized.exception';
const secret = process.env.JWT_SECRET || 'supersecret';

export const generateToken = (payload: object, expiresIn = '1h') => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};

export function extractBearerToken(req: Request): string {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    throw new UnauthorizedException()
  }

  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }

  throw new UnauthorizedException();
}

export function extractXToken(req: Request): string {
  const xToken = req.headers['x-token'];
  if (!xToken) {
    throw new UnauthorizedException()
  }

  return xToken as string;
}