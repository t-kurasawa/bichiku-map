import { rest } from 'msw';
import {
  EvacuationArea,
  EvacuationCenter,
  StockpileStatusEC,
  StockpileType,
} from 'schema';
import stockpileType from './data/stockpileType.json';
import stockpileStatusEC from './data/stockpileStatusEC.json';
import evacuationCenter from './data/evacuationCenter.json';
import evacuationArea from './data/evacuationArea.json';

export const handlers = [
  rest.get('/stockpile/type', (req, res, ctx) => {
    const data: Array<StockpileType> = stockpileType;
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('/stockpile/status/ec', (req, res, ctx) => {
    const data: Array<StockpileStatusEC> = stockpileStatusEC;
    console.log(data);
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
