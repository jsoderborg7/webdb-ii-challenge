const express = require('express');

const server = express();

server.use(express.json());

const db = require('./data/db-config');

server.get('/cars', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(err => {
      res.status(500).json({ message: 'Could not retrieve cars.'})
    })
});

server.post('/cars', (req, res) =>{
  const carData = req.body;
  if (!carData.VIN || !carData.make || !carData.model || !carData.mileage){
    res.status(400).json({message: "VIN, make, model, and mileage fields are required"})
  } else {
    db('cars')
    .insert(carData, 'id')
    .then(car =>{
      res.status(200).json(car)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }
})

module.exports = server;