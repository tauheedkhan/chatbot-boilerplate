import conversationRouter from './api/controllers/conversation/router';

const root = '/server/api/v1';
export default function routes(app) {
  app.use(`${root}/watson/assistance`, conversationRouter);
};