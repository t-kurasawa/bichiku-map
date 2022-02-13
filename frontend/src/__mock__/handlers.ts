import { rest } from 'msw';
import {
  StockpileType,
  StockpileStatusEC,
  EvacuationCenter,
  EvacuationArea,
} from 'schema';
// import stockpileType from './data/stockpileType.json';
// import stockpileStatusEC from './data/stockpileStatusEC.json';
// import evacuationCenter from './data/evacuationCenter.json';
// import evacuationArea from './data/evacuationArea.json';

const stockpileType = require('./data/stockpileType.json');
const stockpileStatusEC = require('./data/stockpileStatusEC.json');
const evacuationCenter = require('./data/evacuationCenter.json');
const evacuationArea = require('./data/evacuationArea.json');

export const handlers = [
  rest.get('/stockpile/type', (req, res, ctx) => {
    const data: Array<StockpileType> = stockpileType;
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('/stockpile/status/ec', (req, res, ctx) => {
    const data: Array<StockpileStatusEC> = stockpileStatusEC;
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('/evacuation/center', async (req, res, ctx) => {
    const data: Array<EvacuationCenter> = evacuationCenter;
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('/evacuation/area', async (req, res, ctx) => {
    const data: Array<EvacuationArea> = evacuationArea;
    return res(ctx.status(200), ctx.json(data));
  }),
];
