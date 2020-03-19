const express = require('express');
const router = express.Router();
const Kund = require('../models/kund');
const User = require('../models/user');

//Hämta lista på användare från db
router.get('/users', (req, res, next) => {
    User.find({}).then((user) => {
        res.send(user);
    });
});

//Lägg till ny användare
router.post('/users', (req, res, next) => {
    User.create(req.body).then((user) => {
        res.send(user);
    }).catch(next);
});

//Uppdatera användare
router.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        User.findOne({_id: req.params.id}).then((user) => {
            res.send(user);
        });
    });
});

//Ta bort användare
router.delete('/users/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}).then((user) => {
        res.send(user);
    });
});


//Hämta lista på kunder från db
router.get('/kunder', (req, res, next) => {
    Kund.find({}).then((kunder) => {
        res.send(kunder);
    });
});

//Lägg till ny kund
router.post('/kunder', (req, res, next) => {
    Kund.create(req.body).then((kund) => {
        res.send(kund);
    }).catch(next);
});

//Uppdatera kund
router.put('/kunder/:id', (req, res, next) => {
    Kund.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Kund.findOne({_id: req.params.id}).then((kund) => {
            res.send(kund);
        });
    });
});

//Ta bort kund
router.delete('/kunder/:id', (req, res, next) => {
    Kund.findByIdAndRemove({_id: req.params.id}).then((kund) => {
        res.send(kund);
    });
});

module.exports = router;