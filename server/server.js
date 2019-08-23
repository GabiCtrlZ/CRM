const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 8080
const api = require('./routes/api')
const path = require('path')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CRM', {useNewUrlParser: true})

app.use(express.static(path.join(__dirname, '..', 'build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || PORT, function () {
    console.log('listening on port: ' + PORT)
})