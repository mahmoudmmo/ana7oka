import jwt from 'jsonwebtoken';

import { jwtObj } from './types';

export function signJWT(obj: jwtObj): string {
  return jwt.sign(obj, getJWTSecret(), {
    expiresIn: '1h',
  });
}
export function verifyJWT(token: string): jwtObj {
  return jwt.verify(token, getJWTSecret()) as jwtObj;
}
function getJWTSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('JWT_SECRET is not defined in the environment variables');
    process.exit(1);
  }
  return secret;
}
