const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Skapa kund Schema & model
const KundSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Namn saknas']
    },
    orgnr: {
        type: String,
        unique: true
    }
});

const Kund = mongoose.model('kund', KundSchema);

module.exports = Kund;