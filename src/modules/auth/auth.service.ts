import bcrypt from 'bcrypt';
import { findUserByUserName, findUserByPhone } from '../user/user.service';
import { generateToken } from '../../utils/jwt';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';
import RedisSingleton from '../../config/redis';

export const SESSION_PREFIX = 'USER_SESSION:';

export const login = async (identifier: string, password: string) => {
  const isPhoneNumber = /^\d+$/.test(identifier);
  let user;
  if (isPhoneNumber) {
    user = await findUserByPhone(identifier);
  }else {
    user = await findUserByUserName(identifier);
  }
  if (!user) throw new UnauthorizedException();

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new UnauthorizedException();

  const token = generateToken({ id: user.id, email: user.email });

  //TODO: Use repository pattern and move this to repository
  const redisClient = RedisSingleton.getInstance();
  const data = { token };
  redisClient.set(`${SESSION_PREFIX}${user.id}`, JSON.stringify(data), 'EX', 36000);

  return { ...user.toJSON(), token };
};

export const logout = async (userId: string) => {
  const redisClient = RedisSingleton.getInstance();
  redisClient.del(`${SESSION_PREFIX}${userId}`);
};
