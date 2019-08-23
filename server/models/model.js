const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientsSchema = new Schema({
    "name": String,
    "email": String,
    "firstContact": Date,
    "emailType": String,
    "sold": Boolean,
    "owner": String,
    "country": String
})

const model = mongoose.model('clients', clientsSchema)

module.exports = model