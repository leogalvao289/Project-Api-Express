// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Person = require('./models/Person')

// read JSON  / middlewares

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//ruta API
const personRoutes = require('./routes/personRoutes')

app.use('/person' , personRoutes)

//ruta inicial / endpoint
app.get('/', (req, res) => {
  // enseñar req

  res.json({ message: 'hola Express' })
})

//puerta
const DB_USER = 'apiexpress'
const DB_PASSWORD = encodeURIComponent('jrWelyRYXOO8MMfE')

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-express-cluster.dvm6n.mongodb.net/apiexpress?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('connect to MongoDB')
    app.listen(3000)
  })
  .catch(err => console.log(err))

// user: apiexpress // password: jrWelyRYXOO8MMfE

//mongodb+srv://apiexpress:jrWelyRYXOO8MMfE@api-express-cluster.dvm6n.mongodb.net/apiexpress?retryWrites=true&w=majority
