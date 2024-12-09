import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';

// export const validationMiddleware = (dto: any) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const instance = plainToInstance(dto, req.body);
//     const errors = await validate(instance);
//     if (errors.length > 0) {
//       return res.status(400).json(errors);
//     }
//     next();
//   };
// };


export function validationMiddleware<T extends ClassConstructor<any>>(dto: T): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(dto, req.body);
    const errors = await validate(instance);
    if (errors.length > 0) {
      res.status(400).json(errors);
    } else {
      next();
    }
  };
}