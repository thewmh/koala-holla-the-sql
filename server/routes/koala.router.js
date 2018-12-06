const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// MONGOOSE SCHEMA //

const Schema = mongoose.Schema;

// create a schema for an koala
const koalaSchema = new Schema({
    name: { type: String, required: true},
    gender: { type: String, required: true},
    age: { type: Number, required: true},
    rtt: { type: Boolean, default: false, required: true},
    notes: { type: String, required: true}
});

const Koala = mongoose.model('Koala', koalaSchema);

// Setup a GET route to get all the koalas from the database
router.get('/', (req, res) => {
    Koala.find({})
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500); // Good server always responds
        })
});


// Setup a POST route to add a new koala to the database
router.post('/', (req, res) => {
    const newKoala = req.body;
    console.log(newKoala);
    Koala.create(newKoala)
        .then( (results) => {
            console.log('POST results ',results);
            res.sendStatus(201)
        })
        .catch( (error) => {
            console.log('POST error', error);
            res.sendStatus(500)
        })
});

// PUT ROUTE TO UPDATE READY TO TRANSFER FLAG
router.put('/transfer/', (req, res) => {
    let updateKoala = req.body;
    // set the ready to transfer flag to true
    updateKoala.rtt = false;
    console.log('ready to transfer koala:', req.body);

    Koala.findByIdAndUpdate({
        _id: req.body._id
    }, updateKoala)
    .then((results) => {
    console.log(`Success making database UPDATE`, results);
    res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error making database UPDATE`, error);
        res.sendStatus(500); // Good server always responds
    })
})

// PUT ROUTE TO UPDATE KOALA
// router.put('/:id', (req, res) => {
//     let updateKoala = req.body;
//     console.log('update koala:', req.body);

//     Koala.findByIdAndUpdate({
//         _id: req.params.id
//     }, updateKoala)
//     .then((results) => {
//     console.log(`Success making database UPDATE`, results);
//     res.sendStatus(200);
//     })
//     .catch((error) => {
//         console.log(`Error making database UPDATE`, error);
//         res.sendStatus(500); // Good server always responds
//     })
// })

// Setup DELETE to remove a koala
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    Koala.findOneAndDelete({
        _id: reqId
    })
        .then( (removedDocument) => {
            console.log('results', removedDocument);
            res.sendStatus(200)
        })
        .catch( (error) => {
            console.log('error', error);
            res.sendStatus(500)
        })
}) 

module.exports = router;