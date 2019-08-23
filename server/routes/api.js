const express = require('express')
const router = express.Router()
const model = require('../models/model')

router.get('/allClients', async function (req, res) {
    const data = await model.find({}).select({__v: 0})
    res.send(data)
})

router.post('/addClient', async function(req, res){
    console.log('Adding client')
    const data = req.body
    const d = new model(data)
    console.log(d)
    await d.save()
    res.end()
})

router.put('/updateClient', async function(req, res){
    const body = req.body
    console.log(body)
    const data = await model.findByIdAndUpdate(body.id, {
        name: body.updateData.name,
        country: body.updateData.country,
        owner: body.updateData.owner
    })
    console.log(data)
    res.send('Updated successfully')
})

router.put('/updateClientFromActions', async function(req, res){
    const body = req.body
    console.log(body)
    const data = await model.findOneAndUpdate({name: body.name}, {
        [body.key]: body.value
    })
    console.log(data)
    res.send('Updated successfully')
})


module.exports = router