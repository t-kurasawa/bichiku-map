import { rest } from 'msw';
import { stockpiles } from './data/stockpiles';
import { evacuationCenters } from './data/evacuationCenters';
import { evacuationAreas } from './data/evacuationAreas';

export const handlers = [
  rest.get('/stockpiles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(stockpiles));
  }),

  rest.get('/evacuation/center', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(evacuationCenters));
  }),

  rest.get('/evacuation/area', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(evacuationAreas));
  }),
];
