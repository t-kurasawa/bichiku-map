import { rest } from 'msw'
import { stockpilesMock } from './data/stockpiles';

const tokyo_dosekiryu_tokubetsu= require('./data/tokyo_dosekiryu_tokubetsu.json')
// const tokyo_dosekiryu= require('./data/tokyo_dosekiryu.json')
// const tokyo_gakekuzure_tokubetsu= require('./data/tokyo_gakekuzure_tokubetsu.json')
// const tokyo_gakekuzure= require('./data/tokyo_gakekuzure.json')
// const tokyo_jisuberi= require('./data/tokyo_jisuberi.json')

export const handlers = [
  rest.get('/stockpiles', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(stockpilesMock)
    )
  }),

  rest.get('/searchOpendata', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(tokyo_dosekiryu_tokubetsu)
    )
  })
]