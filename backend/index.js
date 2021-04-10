require('dotenv').config()
const express = require('express')
const qs = require('qs')
const axios = require('axios')

const app = express()
const port = 3000

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = process.env.API_KEY

app.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  const { query } = request
  query.appid = apiKey
  const queryString = qs.stringify(query)
  axios(`${apiUrl}?${queryString}`).then((res) => {
    response.send(res.data)
  })
})

app.listen(port, () => {
  console.log('I am listening')
})
