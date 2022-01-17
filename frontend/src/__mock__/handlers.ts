import { rest } from 'msw';
import { stockpiles } from './data/stockpiles';
import { evacuationCenters } from './data/evacuationCenters';
import { evacuationAreas } from './data/evacuationAreas';

const tokyoDosekiryuTokubetsu = require('./data/tokyo_dosekiryu_tokubetsu.json');
// const tokyo_dosekiryu= require('./data/tokyo_dosekiryu.json')
// const tokyo_gakekuzure_tokubetsu= require('./data/tokyo_gakekuzure_tokubetsu.json')
// const tokyo_gakekuzure= require('./data/tokyo_gakekuzure.json')
// const tokyo_jisuberi= require('./data/tokyo_jisuberi.json')

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

  rest.get('/searchOpendata', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tokyoDosekiryuTokubetsu));
  }),
];
