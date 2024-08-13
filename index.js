const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/productRoute.js')

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/products', router)













mongoose.connect('mongodb+srv://admin:manutd23@app.p7mur.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=App').then(()=>{
  app.listen(3000, () => console.log('Server is running'))
}).catch(err => console.log(err))


