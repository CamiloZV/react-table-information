import { rest } from 'msw';

export const handlers = [
  rest.post('https://tasks.free.beeceptor.com/tasks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json('Task Creates'));
  }),
];
