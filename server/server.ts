import dotenv from 'dotenv';
import express from 'express';

import { initDatastore } from './datastore';
import { signInHandler, signUpHandler } from './handellers/authHandler';
import { createPostHandler, listPostsHandler } from './handellers/postHandler';
import { authMiddleware } from './middleware/authMiddleware';
import { error_middleware } from './middleware/errorMiddleware';
import { req_midleware } from './middleware/loggerMiddleware';

(async () => {
  await initDatastore();
  dotenv.config();
  const app = express();
  app.use(express.json());

  app.use(req_midleware);
  // public routes
  app.get('/healthz', (req, res) => {
    res.send('status: ok');
  });
  app.post('/sign-up', signUpHandler);
  app.post('/sign-in', signInHandler);
  // any route after this middleware will require authentication
  app.use(authMiddleware);
  //protected routes
  app.get('/posts', listPostsHandler);
  app.post('/posts', createPostHandler);
  app.use(error_middleware);
  app.listen(process.env.PORT || 3000);
})();
