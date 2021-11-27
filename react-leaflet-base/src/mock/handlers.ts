import { rest } from 'msw'

export const handlers = [
  rest.get('/stockpiles', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        stockpiles: [{
          id: '1',
          name: '尾西の五目ごはん',
          user: {
            id: {
              name: 'PPS',
              value: '0390511T'
            },
            name: {
              title: 'mr',
              first: 'brad',
              last: 'gibson',
            },
            gender: 'male',
            picture: {
              large: 'https://randomuser.me/api/portraits/men/75.jpg',
              medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
              thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
            },
            email: 'brad.gibson@example.com'
          },  
          stockQuantity: 100,
          lat: 35.6694061,
          lng: 139.8034602,
          address: '東京都千代田区丸の内１丁目',
          registrationDate: '2021-12-04',
          expiryDate: '2026-08-10',
        },
        {
          id: '2',
          name: '尾西の炊き込みごはん',
          user: {
            id: {
              name: 'PPS',
              value: '0390511T'
            },
            name: {
              title: 'mr',
              first: 'brad',
              last: 'gibson',
            },
            gender: 'male',
            picture: {
              large: 'https://randomuser.me/api/portraits/men/75.jpg',
              medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
              thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
            },
            email: 'brad.gibson@example.com'
          },  
          stockQuantity: 100,
          lat: 35.6823542,
          lng: 139.7745045,
          address: '東京都千代田区丸の内１丁目',
          registrationDate: '2021-12-04',
          expiryDate: '2026-08-10',
        }],
      })
    )
  })
]