const express = require('express')
const { paygate } = require('paygate-x402')

const app = express()

app.use(paygate({
  price: '0.001',
  payTo: 'dhruvieiei.base.eth'
}))

app.get('/cricket', (req, res) => {
  res.json({
    match: 'India vs Australia',
    score: '287/4',
    overs: '45.2',
    status: 'Live'
  })
})

app.listen(3001, () => {
  console.log('API running!')
})
