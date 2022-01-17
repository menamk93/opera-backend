const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
    mensagen: "Usando get dentro da rota"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
    mensagen: "Usando post dentro da rota"
    });
});

module.exports = router;