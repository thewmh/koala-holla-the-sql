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
    readyToTransfer: { type: Boolean, default: false, required: true},
    notes: { type: Number, required: true}
});

const Koala = mongoose.model('Koala', koalaSchema);

// Setup a GET route to get all the koalas from the database
router.get('/', (req, res) => {
    Koala.find({})
        .then((results) => {
            res.send(results);
        })
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    // const sqlText = `SELECT * FROM employees ORDER BY lastName;`;
    // pool.query(sqlText)
    //     .then((result) => {
    //         console.log(`Got stuff back from the database`, result);
    //         res.send(result.rows);
    //     })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500); // Good server always responds
        })
});


// Setup a POST route to add a new employee to the database
// router.post('/', (req, res) => {
//     const employee = req.body;
//     Employee.create({firstName: employee.firstName, lastName: employee.lastName, jobTitle: employee.jobTitle, annualSalary: employee.annualSalary, idNumber: employee.idNumber})
// //     const sqlText = `INSERT INTO employees (firstName, lastName, jobTitle, annualSalary) VALUES 
// //   ($1, $2, $3, $4)`;
// //     pool.query(sqlText, [employee.firstName, employee.lastName, employee.jobTitle, employee.annualSalary])
//         .then((result) => {
//             console.log(`Added to the database`, result);
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log(`Error making database POST`, error);
//             res.sendStatus(500); // Good server always responds
//         })
// })

// router.put('/:id', (req, res) => {
//     let updateEmployee = req.body;
//     console.log('update:', req.body);

//     Employee.findByIdAndUpdate({
//         _id: req.params.id
//     }, updateEmployee)
//     .then((results) => {
//     console.log(`Success making database DELETE`, results);
//     res.sendStatus(200);
// })
// .catch((error) => {
//     console.log(`Error making database DELETE`, error);
//     res.sendStatus(500); // Good server always responds
// })
// })
// // Setup DELETE to remove an employee
// router.delete('/:id', (req, res) => {
//     let reqId = req.params.id;
//     Employee.findByIdAndRemove({_id: reqId})
//     .then((results) => {
//         console.log(`Success making database DELETE`, results);
//         res.sendStatus(200);
//     })
//     .catch((error) => {
//         console.log(`Error making database DELETE`, error);
//         res.sendStatus(500); // Good server always responds
//     })
// })

module.exports = router;