import { ErrorRequestHandler } from 'express';

export const error_middleware: ErrorRequestHandler = (err, req, res, next) => {
  console.error('da error', err);
  return res.status(500).send('try again later');
};
