import { rest } from 'msw'
const tokyo_dosekiryu_tokubetsu= require('./data_geoJson/tokyo_dosekiryu_tokubetsu.json')
// const tokyo_dosekiryu= require('./data_geoJson/tokyo_dosekiryu.json')
// const tokyo_gakekuzure_tokubetsu= require('./data_geoJson/tokyo_gakekuzure_tokubetsu.json')
// const tokyo_gakekuzure= require('./data_geoJson/tokyo_gakekuzure.json')
// const tokyo_jisuberi= require('./data_geoJson/tokyo_jisuberi.json')

const stockpiles= require('./stockpiles/stockpiles.json')

export const handlers = [
  rest.get('/stockpiles', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(stockpiles)
    )
  }),

  rest.get('/searchOpendata', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(tokyo_dosekiryu_tokubetsu)
    )
  })
]