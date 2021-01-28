var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var routerUsers = require('./routers/users')
var app = express()

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://db_B2dev:Nicolasdu69680@cluster0.7677z.mongodb.net/b2dev?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error : '))
db.once('open', () => console.log('Connected to MongoDB Atlas'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/users', routerUsers)

app.get('/', (req,res) => {
    res.send('statut')
})

app.listen(3001, () => {
    console.log('Service running on port 3001')
})