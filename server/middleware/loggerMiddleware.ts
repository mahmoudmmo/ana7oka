import { RequestHandler } from 'express';

export const req_midleware: RequestHandler = (req, res, next) => {
  console.log(req.method, '--body-->', req.body);
  next();
};
